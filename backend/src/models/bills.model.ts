import { Prisma } from "@prisma/client";
import prisma from "../database/prisma";
import bucket from "../integrations/firebaseStorage";

import {
  DashboardGraphQuery,
  FindById,
  BilWithFileInfo,
  QueryBillsParams,
  BillWithoutRelations,
} from "../@types/bills.types";

import { v4 as uuid } from "uuid";
import { unlink, unlinkSync } from "fs";
import path from "path";

const orderBy = { referenceMonth: Prisma.SortOrder.asc };
const include = {
  billHistory: true,
  company: true,
  information: { select: { info: true } },
};

class BillsModel {
  async findAll(where: QueryBillsParams) {
    return await prisma.bill.findMany({ where, orderBy });
  }

  async findByClientId(where: FindById) {
    return await prisma.bill.findUnique({ where, include });
  }

  async bulkCreate(bills: BilWithFileInfo[]) {
    const persistedBills: BillWithoutRelations[] = [];

    for (const bill of bills) {
      const { filePath, fileType, ...billRest } = bill;

      type integrationResponse = [unknown, { mediaLink: string }];
      const [_, file] = (await bucket.upload(filePath, { gzip: true, contentType: fileType })) as integrationResponse;

      unlinkSync(path.resolve(filePath));

      const persistedBill = await prisma.$transaction(async (tx) => {
        const { company, information, billHistory, ...billPayload } = billRest;
        const persistedCompany = await tx.company.findFirst({ where: { clientNumber: company.clientNumber } });

        return tx.bill.create({
          data: {
            ...billPayload,
            uploadPath: file.mediaLink,
            company: { connectOrCreate: { create: company, where: { id: persistedCompany?.id ?? uuid() } } },
            information: { create: { info: information } },
            billHistory: { createMany: { data: billHistory } },
          },
          include,
        });
      });

      persistedBills.push(persistedBill);
    }

    return persistedBills;
  }

  async dashboardFecth(query: DashboardGraphQuery) {
    const { clientNumber, endDate, startDate } = query;
    const where = {
      clientNumber,
      referenceMonth: {
        gte: startDate,
        lte: endDate,
      },
    };

    return await prisma.bill.findMany({
      where,
      orderBy,
    });
  }
}

export default new BillsModel();

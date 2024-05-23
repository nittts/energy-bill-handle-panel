import { Prisma } from "@prisma/client";
import prisma from "../database/prisma";
import { ParsedBillWithFileInfo, QueryBillsParams } from "../@types/bills.types";

import { v4 as uuid } from "uuid";
import bucket from "../integrations/firebaseStorage";
import { unlinkSync } from "fs";

const orderBy = { referenceMonth: Prisma.SortOrder.asc };
const include = {
  billHistory: true,
  company: true,
  information: { select: { info: true } },
};

class BillsModel {
  async findAll(where: QueryBillsParams) {
    return await prisma.bill.findMany({ where, orderBy, include });
  }

  async findByClientId() {
    return [];
  }

  async bulkCreate(bills: ParsedBillWithFileInfo[]) {
    const persistedBills = [];

    for (const bill of bills) {
      const { filePath, fileType, ...billRest } = bill;

      const [_, file] = (await bucket.upload(filePath, { gzip: true, contentType: fileType })) as [
        unknown,
        { mediaLink: string }
      ];

      unlinkSync(filePath);

      const persistedBill = await prisma.$transaction(async (tx) => {
        const { company, information, billHistory, ...billPayload } = billRest;
        const persistedCompany = await tx.company.findFirst({ where: { cpfCnpj: bill.company.cpfCnpj } });

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
}

export default new BillsModel();

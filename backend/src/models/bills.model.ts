import { Prisma } from "@prisma/client";
import prisma from "../database/prisma";
import { QueryBillsParams } from "../@types/bills.types";

const orderBy = { referenceMonth: Prisma.SortOrder.asc };

class BillsModel {
  model: Prisma.BillDelegate;

  constructor() {
    this.model = prisma.bill;
  }

  async findAll(where: QueryBillsParams) {
    return await this.model.findMany({ where, orderBy });
  }

  async findByClientId() {
    return [];
  }

  async bulkCreate() {
    return [];
  }
}

export default new BillsModel();

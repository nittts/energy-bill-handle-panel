import { FindById, QueryCompanyParams } from "../@types/company.types";
import prisma from "../database/prisma";

class CompanyModel {
  async getCompanies(where: QueryCompanyParams) {
    return await prisma.company.findMany({ where });
  }

  async findById(where: FindById) {
    return await prisma.company.findUnique({ where });
  }
}

export default new CompanyModel();

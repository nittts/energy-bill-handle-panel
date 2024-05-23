import { QueryCompanyParams } from "../@types/company.types";
import prisma from "../database/prisma";

class CompanyModel {
  async getCompanies(where: QueryCompanyParams) {
    return await prisma.company.findMany({ where });
  }
}

export default new CompanyModel();

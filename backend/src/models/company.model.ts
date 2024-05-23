import prisma from "../database/prisma";

class CompanyModel {
  async getCompanies() {
    return await prisma.company.findMany({});
  }
}

export default new CompanyModel();

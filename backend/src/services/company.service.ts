import { FindById, QueryCompanyParams } from "../@types/company.types";
import { AppError } from "../middlewares/asyncErrors.middleware";
import companyModel from "../models/company.model";

class CompanyService {
  async getCompanies(query: QueryCompanyParams) {
    return await companyModel.getCompanies(query);
  }

  async findById(params: FindById) {
    const company = await companyModel.findById(params);

    if (!company) throw new AppError("Empresa não encontrada");

    return company;
  }
}

export default new CompanyService();

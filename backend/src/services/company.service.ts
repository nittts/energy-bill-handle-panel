import { QueryCompanyParams } from "../@types/company.types";
import companyModel from "../models/company.model";

class CompanyService {
  getCompanies(query: QueryCompanyParams) {
    return companyModel.getCompanies(query);
  }
}

export default new CompanyService();

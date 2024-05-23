import companyModel from "../models/company.model";

class CompanyService {
  getCompanies() {
    return companyModel.getCompanies();
  }
}

export default new CompanyService();

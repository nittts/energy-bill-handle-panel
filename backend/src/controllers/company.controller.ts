import companyService from "../services/company.service";
import { Request, Response } from "express";

class CompanyController {
  async index(req: Request, res: Response) {
    const companies = await companyService.getCompanies();

    return res.status(200).send(companies);
  }
}

export default new CompanyController();

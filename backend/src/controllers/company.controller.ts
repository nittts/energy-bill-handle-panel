import { findById, queryCompanyParams } from "../schemas/company.schemas";
import companyService from "../services/company.service";
import { Request, Response } from "express";

class CompanyController {
  async index(req: Request, res: Response) {
    const query = queryCompanyParams.parse(req.query);

    const companies = await companyService.getCompanies(query);

    return res.status(200).send(companies);
  }

  async findById(req: Request, res: Response) {
    const params = findById.parse(req.params);

    const companies = await companyService.findById(params);

    return res.status(200).send(companies);
  }
}

export default new CompanyController();

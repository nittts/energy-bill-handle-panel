import { UploadedFiles } from "../@types/file.types";
import { AppError } from "../middlewares/asyncErrors.middleware";
import billsService from "../services/bills.service";
import { Request, Response } from "express";

class BillsController {
  async index(req: Request, res: Response) {
    const { query } = req;

    const bills = await billsService.findAll(query);

    return res.status(200).send(bills);
  }

  async getByClientId(req: Request, res: Response) {
    return billsService.findByClientId();
  }

  async uploadBills(req: Request, res: Response) {
    const { files } = req;

    if (!files && !Array.isArray(files)) throw new AppError("Envie ao menos uma fatura", 400);

    const bills = await billsService.uploadBills(files as UploadedFiles);

    return res.status(201).send(bills);
  }

  async dashboardGraphs(req: Request, res: Response) {
    return billsService.findAll({});
  }
}

export default new BillsController();

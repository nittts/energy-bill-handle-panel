import { UploadedFiles } from "../@types/file.types";
import { AppError } from "../middlewares/asyncErrors.middleware";
import { queryBillsParams, findById, dashboardGraphQuery } from "../schemas/bill.schemas";
import billsService from "../services/bills.service";
import { Request, Response } from "express";

class BillsController {
  async index(req: Request, res: Response) {
    const query = queryBillsParams.parse(req.query);

    const bills = await billsService.findAll(query);

    return res.status(200).send(bills);
  }

  async getById(req: Request, res: Response) {
    const params = findById.parse(req.params);

    const bills = await billsService.findById(params);

    return res.status(200).send(bills);
  }

  async uploadBills(req: Request, res: Response) {
    const { files } = req;

    if (!files && !Array.isArray(files)) throw new AppError("Envie ao menos uma fatura", 400);

    const bills = await billsService.uploadBills(files as UploadedFiles);

    return res.status(201).send(bills);
  }

  async dashboardGraphs(req: Request, res: Response) {
    const query = dashboardGraphQuery.parse(req.query);

    const graphs = await billsService.dashboardGraphs(query);

    return res.status(200).send(graphs);
  }

  async deleteBill(req: Request, res: Response) {
    const params = findById.parse(req.params);

    const deletedBill = await billsService.deleteBill(params);

    return res.status(200).send(deletedBill);
  }
}

export default new BillsController();

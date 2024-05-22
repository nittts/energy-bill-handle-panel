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
    return billsService.bulkCreate();
  }

  async dashboardGraphs(req: Request, res: Response) {
    return billsService.findAll({});
  }
}

export default new BillsController();

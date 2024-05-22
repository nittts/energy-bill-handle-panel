import billsService from "../services/bills.service";

class BillsController {
  async index(req: Request, res: Response) {
    return billsService.findAll();
  }

  async getByClientId(req: Request, res: Response) {
    return billsService.findByClientId();
  }

  async uploadBills(req: Request, res: Response) {
    return billsService.bulkCreate();
  }

  async dashboardGraphs(req: Request, res: Response) {
    return billsService.findAll();
  }
}

export default new BillsController();

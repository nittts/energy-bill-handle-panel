import { QueryBillsParams } from "../@types/bills.types";
import billsModel from "../models/bills.model";

class BillsService {
  async findAll(filters: QueryBillsParams) {
    return billsModel.getAll(filters);
  }

  async findByClientId() {
    return billsModel.findByClientId();
  }

  async bulkCreate() {
    return billsModel.bulkCreate();
  }
}

export default new BillsService();

import { QueryBillsParams } from "../@types/bills.types";
import billsModel from "../models/bills.model";

class BillsService {
  async findAll(filters: QueryBillsParams) {
    const bills = await billsModel.findAll(filters);

    const formattedBills = bills.map((bill) => ({
      clientNumber: bill.clientId,
      referenceMonth: bill.referenceMonth,
    }));

    return formattedBills;
  }

  async findByClientId() {
    return billsModel.findByClientId();
  }

  async bulkCreate() {
    return billsModel.bulkCreate();
  }
}

export default new BillsService();

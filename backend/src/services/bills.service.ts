import billsModel from "../models/bills.model";

class BillsService {
  async findAll() {
    return billsModel.getAll();
  }

  async findByClientId() {
    return billsModel.findByClientId();
  }

  async bulkCreate() {
    return billsModel.bulkCreate();
  }
}

export default new BillsService();

import { Bill, PrismaClient } from "@prisma/client";
import { QueryBillsParams } from "../@types/bills.types";
import billsModel from "../models/bills.model";

class BillsService {
  async findAll(filters: QueryBillsParams) {
    const bills = await billsModel.findAll(filters);

    return this.mapBills(bills);
  }

  async findByClientId() {
    return billsModel.findByClientId();
  }

  async bulkCreate() {
    return billsModel.bulkCreate();
  }

  private mapBills(bills: Bill[]) {
    return bills.map((bill) => {
      const {
        energyElectric,
        energySceeeWithoutICMS,
        energyGD,
        energyElectricCost,
        municipalityContributionCost,
        energySceeeWithoutICMSCost,
        energyGDEconomy,
        ...billRest
      } = bill;

      const energyConsumption = energyElectric + energySceeeWithoutICMS;
      const gdTotal = energyElectricCost + municipalityContributionCost + energySceeeWithoutICMSCost;

      return {
        ...billRest,
        energyConsumption,
        energyReimbursed: energyGD,
        gdTotal,
        gdEconomy: energyGDEconomy,
      };
    });
  }
}

export default new BillsService();

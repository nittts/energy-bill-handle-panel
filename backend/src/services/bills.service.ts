import { Bill } from "@prisma/client";
import { ParsedBill, QueryBillsParams } from "../@types/bills.types";
import { UploadedFiles } from "../@types/file.types";

import billsModel from "../models/bills.model";
import pdfParserHelper from "../helpers/pdfParsers.helper";
import constructBillHelper from "../helpers/constructBill.helper";
class BillsService {
  async findAll(filters: QueryBillsParams) {
    const bills = await billsModel.findAll(filters);

    return this.mapBills(bills);
  }

  async findByClientId() {
    return billsModel.findByClientId();
  }

  async uploadBills(files: UploadedFiles) {
    const pdfInfos = [];

    for (const file of files) {
      const parsedPdf = await pdfParserHelper(file.path);

      pdfInfos.push({ ...constructBillHelper(parsedPdf), filePath: file.path, fileType: file.mimetype });
    }

    return billsModel.bulkCreate(pdfInfos);
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

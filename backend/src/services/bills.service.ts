import { Bill } from "@prisma/client";
import { DashboardGraphQuery, FindById, ParsedBill, QueryBillsParams } from "../@types/bills.types";
import { UploadedFiles } from "../@types/file.types";

import billsModel from "../models/bills.model";
import pdfParserHelper from "../helpers/pdfParsers.helper";
import constructBillHelper from "../helpers/constructBill.helper";
import GenerateDates from "../helpers/generateDates";
class BillsService {
  async findAll(filters: QueryBillsParams) {
    const bills = await billsModel.findAll(filters);

    return this.mapBills(bills);
  }

  async findById(where: FindById) {
    return billsModel.findByClientId(where);
  }

  async uploadBills(files: UploadedFiles) {
    const pdfInfos = [];

    for (const file of files) {
      const parsedPdf = await pdfParserHelper(file.path);

      pdfInfos.push({ ...constructBillHelper(parsedPdf), filePath: file.path, fileType: file.mimetype });
    }

    return billsModel.bulkCreate(pdfInfos);
  }

  async dashboardGraphs(query: DashboardGraphQuery) {
    const bills = await billsModel.dashboardFecth(query);

    const mappedBills = this.mapBills(bills);

    const payload = {
      series: {
        energyConsumption: [],
        energyReimbursed: [],
        gdTotal: [],
        gdEconomy: [],
      },
      categories: [],
    } as { series: { [x: string]: number[] }; categories: string[] };

    mappedBills.forEach((bill) => {
      payload.series.energyConsumption.push(bill.energyConsumption);
      payload.series.energyReimbursed.push(bill.energyReimbursed);
      payload.series.gdTotal.push(bill.gdTotal);
      payload.series.gdEconomy.push(Math.abs(bill.gdEconomy));
    });

    payload.categories = GenerateDates(query.startDate, query.endDate);

    return payload;
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

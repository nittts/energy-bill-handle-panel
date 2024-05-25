import {
  Bill,
  BillWithoutRelations,
  BillsOverload,
  DashboardGraphQuery,
  FindById,
  QueryBillsParams,
} from "../@types/bills.types";
import { UploadedFiles } from "../@types/file.types";

import billsModel from "../models/bills.model";
import pdfParserHelper from "../helpers/pdfParser.helper";
import constructBillHelper from "../helpers/constructBill.helper";
import GenerateDates from "../helpers/generateDates.helper";

import { AppError } from "../middlewares/asyncErrors.middleware";
class BillsService {
  async findAll(filters: QueryBillsParams) {
    const bills = await billsModel.findAll(filters);

    return this.mapBills(bills);
  }

  async findById(where: FindById) {
    const bill = await billsModel.findById(where);

    if (!bill) throw new AppError("Fatura não encontrada");

    return this.mapBills(bill);
  }

  async uploadBills(files: UploadedFiles) {
    const pdfInfos = [];

    for (const file of files) {
      const parsedPdf = await pdfParserHelper(file.path);

      pdfInfos.push({ ...constructBillHelper(parsedPdf), filePath: file.path, fileType: file.mimetype });
    }

    const uploadedBills = await billsModel.bulkCreate(pdfInfos);

    return this.mapBills(uploadedBills);
  }

  async dashboardGraphs(query: DashboardGraphQuery) {
    const bills = await billsModel.dashboardFecth(query);

    const mappedBills = this.mapBills(bills);

    const payload = {
      series: {
        energyConsumption: {
          name: "Consumo de energia Elétrica kWh",
          data: [],
        },
        energyReimbursed: {
          name: "Energia Compensada kWh",
          data: [],
        },
        gdTotal: {
          name: "Valor Total sem GD R$",
          data: [],
        },
        gdEconomy: {
          name: "Economia GD R$",
          data: [],
        },
      },
      categories: [],
    } as { series: { [x: string]: { name: string; data: number[] } }; categories: string[] };

    if (Array.isArray(mappedBills)) {
      mappedBills.forEach((bill) => {
        payload.series.energyConsumption.data.push(bill.energyConsumption);
        payload.series.energyReimbursed.data.push(bill.energyReimbursed);
        payload.series.gdTotal.data.push(bill.gdTotal);
        payload.series.gdEconomy.data.push(Math.abs(bill.gdEconomy));
      });
    }

    payload.categories = GenerateDates(query.startDate, query.endDate);

    return payload;
  }

  private mapBills(bills: BillsOverload[] | BillsOverload) {
    const transform = (bill: BillsOverload) => {
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
    };

    if (Array.isArray(bills)) {
      return bills.map((bill) => transform(bill));
    }

    return transform(bills);
  }
}

export default new BillsService();

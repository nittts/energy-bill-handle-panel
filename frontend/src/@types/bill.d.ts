import { Company } from "./company";

export type Bill = {
  id: string;
  uploadPath: string;
  clientNumber: string;
  createdAt: Date | string;
  dueDate: Date | string;
  emissionDate: Date | string;
  referenceMonth: Date;
  energyConsumption: number;
  energyReimbursed: number;
  gdTotal: number;
  gdEconomy: number;
  information?: { info: string };
};

export type BillHistory = {
  monthYear: Date | string;
  consumption: number;
  averageDayKwh: number;
  days: number;
};

export type BillWithRelations = Bill & {
  company: Company;
  billHistory: BillHistory[];
};

export type BillQueryParams = {
  clientNumber?: string;
  installationNumber?: string;
  referenceMonth?: Date;
  dueDate?: Date;
};

export type BillGraphsParams = {
  clientNumber?: string;
  startDate?: string;
  endDate?: string;
};

export type BillGraphs = {
  series: {
    energyConsumption: GraphSeries;
    energyReimbursed: GraphSeries;
    gdTotal: GraphSeries;
    gdEconomy: GraphSeries;
  };
  categories: string[];
};

export type GraphSeries = {
  name: string;
  data: number[];
};

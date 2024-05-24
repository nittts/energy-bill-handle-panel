export type Bill = {
  id: string;
  url: string;
  clientNumber: string;
  referenceMonth: Date;
  energyConsumption: number;
  energyReimbursed: number;
  gdTotal: number;
  gdEconomy: number;
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

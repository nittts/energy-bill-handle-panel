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

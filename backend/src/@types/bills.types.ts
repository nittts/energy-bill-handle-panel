import z from "zod";
import * as schemas from "../schemas/bill.schemas";
import { Company } from "./company.types";

export type QueryBillsParams = z.infer<typeof schemas.queryBillsParams>;

export type FindById = z.infer<typeof schemas.findById>;

export type DashboardGraphQuery = z.infer<typeof schemas.dashboardGraphQuery>;

export type ParsedBillHistory = {
  monthYear: Date | string;
  consumption: number;
  averageDayKwh: number;
  days: number;
};

export type Bill = {
  id?: string;
  clientNumber: string;
  installationNumber: string;
  energyElectric: number;
  energyElectricCost: number;
  energySceeeWithoutICMS: number;
  energySceeeWithoutICMSCost: number;
  energyGD: number;
  energyGDEconomy: number;
  municipalityContributionCost: number;
  totalCost: number;
  billHistory: ParsedBillHistory[];
  referenceMonth: Date | string;
  dueDate: Date | string;
  emissionDate: Date | string;
  company: Company;
  information: string;
};

export type BillWithoutRelations = Omit<Bill, "company" | "information" | "billHistory">;

export type BilWithFileInfo = Bill & {
  filePath: string;
  fileType: string;
};

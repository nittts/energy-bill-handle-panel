import z from "zod";
import * as schemas from "../schemas/bill.schemas";
import { ParsedBillCompany } from "./company.types";

export type QueryBillsParams = z.infer<typeof schemas.queryBillsParams>;

export type FindById = z.infer<typeof schemas.findById>;

export type ParsedBillHistory = {
  monthYear: Date | string;
  consumption: number;
  averageDayKwh: number;
  days: number;
};

export type ParsedBill = {
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
  company: ParsedBillCompany;
  information: string;
};

export type ParsedBillWithFileInfo = ParsedBill & {
  filePath: string;
  fileType: string;
};

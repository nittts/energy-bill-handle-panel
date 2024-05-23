import { z } from "zod";
import * as schemas from "../schemas/company.schemas";

export type QueryCompanyParams = z.infer<typeof schemas.queryCompanyParams>;

export type ParsedBillCompany = {
  name: string;
  streetAddress: string;
  district: string;
  address: string;
  cpfCnpj: string;
  stateSubscription: string;
  clientNumber: string;
};

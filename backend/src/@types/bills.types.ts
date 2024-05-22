import z from "zod";
import * as schemas from "../schemas/bill.schemas";

export type QueryBillsParams = z.infer<typeof schemas.queryBillsParams>;

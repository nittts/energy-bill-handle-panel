import z from "zod";

export const queryBillsParams = z.object({
  clientNumber: z.string().optional(),
  installationNumber: z.string().optional(),
  referenceMonth: z.coerce.date().optional(),
  dueDate: z.coerce.date().optional(),
});

export const findById = z.object({ id: z.string() });

export const dashboardGraphQuery = z.object({
  clientNumber: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

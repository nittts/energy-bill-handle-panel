import z from "zod";

export const queryBillsParams = z.object({
  id: z.string().uuid().optional(),
  clientNumber: z.string().optional(),
  installationNumber: z.string().optional(),
  referenceMonth: z.coerce.date().optional(),
  dueDate: z.coerce.date().optional(),
});

export const findById = z.object({ id: z.string() });

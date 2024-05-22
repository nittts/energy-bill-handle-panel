import z from "zod";

export const queryBillsParams = z.object({
  id: z.string().uuid().optional(),
  clientId: z.string().optional(),
  installationId: z.string().optional(),
  referenceMonth: z.coerce.date().optional(),
  dueDate: z.coerce.date().optional(),
});

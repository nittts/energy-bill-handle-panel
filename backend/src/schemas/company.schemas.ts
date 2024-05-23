import z from "zod";

export const queryCompanyParams = z.object({
  clientNumber: z.string().optional(),
  cpfCnpj: z.string().optional(),
  name: z.string().optional(),
});

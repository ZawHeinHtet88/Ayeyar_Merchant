import z from "zod"


export const WithdrawalSchema = z
  .object({
    status: z.string().min(1, "Status is required"),
  })
  .strict();

export type WithdrawalSchemaType = z.infer<typeof WithdrawalSchema>;
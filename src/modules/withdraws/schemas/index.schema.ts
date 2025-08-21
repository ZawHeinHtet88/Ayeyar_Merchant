import z from "zod";

export const withdrawSchema = z.object({
  paymentMethodId: z.string().min(1, "Status is required"),
  amount: z.string().min(1, "Status is required"),
}).strict();

export type withdrawSchemaType = z.infer<typeof withdrawSchema>;
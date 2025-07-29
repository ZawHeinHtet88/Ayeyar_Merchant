import z from "zod"

export const OrderSchema = z.object({
  status: z.string().min(1, "Status is required"),
}).strict();

export type OrderSchemaType = z.infer<typeof OrderSchema>;
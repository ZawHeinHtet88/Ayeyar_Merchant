import {z} from "zod"

export const paymentSchema = z.object({
    QR : z.any(),
    pyMethod : z.string().min(1),
    accNumber : z.string().min(5),
    accName : z.string()
}).strict()

export type paymentSchemaType = z.infer<typeof paymentSchema>
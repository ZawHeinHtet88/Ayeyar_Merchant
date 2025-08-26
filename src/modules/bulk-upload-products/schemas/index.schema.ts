import z from "zod";

export const BulkUploadProductSchema = z.object({
    file : z.any(),
    total : z.coerce.number().int().min(1),
}).strict();


export type BulkUploadProductSchemaType = z.infer<typeof BulkUploadProductSchema>;
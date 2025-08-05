import { z } from "zod";

export const ProductSchema = z
  .object({
    name: z.string().min(1),
    description: z.string().min(1),
    body: z.string().min(1),
    price: z.coerce.number().int().min(1),
    inventory: z.coerce.number().int().min(1),
    category: z.string().min(1),
    discount: z.coerce.number().int(),
    type: z.string().min(1),
    tags: z.string(),
    images: z.any().optional(),
  })
  .strict();

export type ProductSchemaType = z.infer<typeof ProductSchema>;

export const AdsSchema = z.object({
  company : z.string().min(1),
  product : z.string().min(1),
  link : z.string().min(1),
  image : z.any().optional()
}).strict()

export type AdsSchemaType = z.infer<typeof AdsSchema>;
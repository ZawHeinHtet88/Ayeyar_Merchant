import { z } from "zod";

export const MerchantSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(4),
    street: z.string().min(7),
    description: z.string().min(1),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
    NRCNumber: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    country: z.string().min(1),
    businessName: z.string().min(1),
    logo: z.any().optional(),
    NRCFront: z.any().optional(),
    NRCBack: z.any().optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Password do not match",
  });

export type MerchantSchemaType = z.infer<typeof MerchantSchema>;

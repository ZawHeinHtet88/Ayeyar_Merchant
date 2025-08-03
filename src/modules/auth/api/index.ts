import { api } from "@/lib/axios";
import type { LoginSchemaType } from "../schemas/index.schema";


export const login = async ({ data }: { data: LoginSchemaType }) => {
    const res = await api.post("/auth/signin/admin-merchant", data);

    return res.data;
};


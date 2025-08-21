import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type { getAllWithdrawApiResponse, getTotalAmountApiResponse } from "../types/api";
import type { withdrawSchemaType } from "../schemas/index.schema";

export const getAllWithdraw = async (filters: BasePagination) => {
  const res = await api.get<getAllWithdrawApiResponse>("/seller/withdraw", {
    params: filters,
  });
  return res.data;
};

export const getTotalAmount = async () => {
  const res = await api.get<getTotalAmountApiResponse>("/seller/total-amount");
  return res.data;
};

export const makeWithdraw = async ({data}:{data:withdrawSchemaType}) => {
  const res = await api.post("/seller/withdraw", data);
  return res.data;
};


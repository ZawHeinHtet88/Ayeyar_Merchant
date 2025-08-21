import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type { getAllpaymentHistoryApiResponse } from "../types/api";

export const getPaymentHistories = async (filters: BasePagination) => {
  const res = await api.get<getAllpaymentHistoryApiResponse>("/seller/payment-history", {
    params: filters,
  });
  return res.data;
};



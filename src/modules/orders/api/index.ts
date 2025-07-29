import { api } from "@/lib/axios";
import type { getAllOrdersApiResponse } from "../types/api";
import type { BasePagination } from "@/types/global";

export const getOrders = async (filters:BasePagination) => {
  const res = await api.get<getAllOrdersApiResponse>("/seller/orders",{params:filters});
  return res.data;
};

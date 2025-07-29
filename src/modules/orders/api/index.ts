import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type { getAllOrdersApiResponse } from "../types/api";

export const getOrders = async (filters: BasePagination) => {
  const res = await api.get<getAllOrdersApiResponse>("/seller/orders", {
    params: filters,
  });
  return res.data;
};

export const updateOrder = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  const res = await api.patch(`/seller/orders/update`, {
    orderId : id,
    status,
  });
  return res.data;
};

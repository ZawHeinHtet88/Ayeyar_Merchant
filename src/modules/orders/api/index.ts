import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type { getAllOrdersApiResponse, getAllSaleHistoriesApiResponse } from "../types/api";

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
    code : id,
    status,
  });
  return res.data;
};

export const saleHistory = async () => {
  const res = await api.get<getAllSaleHistoriesApiResponse>("/seller/summary")
  return res.data
}
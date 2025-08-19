import { api } from "@/lib/axios";
import type {
   
   getAllRevenueAndOrderApiResponse,
   getAllStatsApiResponse,
   getAllTypeChartApiResponse,
} from "../types/api";

export const getAllStats = async () => {
  const res = await api.get<getAllStatsApiResponse>("seller/status");

  return res.data;
};

export const getAllRevenueAndOrders = async () => {
  const res = await api.get<getAllRevenueAndOrderApiResponse>(
    "/seller/revenue-order-chart"
  );

  return res.data;
};

export const getAllTypeChart = async () => {
  const res = await api.get<getAllTypeChartApiResponse>("/seller/type-chart");

  return res.data;
};

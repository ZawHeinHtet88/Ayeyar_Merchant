import { useQuery } from "@tanstack/react-query";
import { getAllRevenueAndOrders, getAllStats, getAllTypeChart } from "../api";

export const useGetAllStatsQuery = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: getAllStats,
  });
};

export const useGetAllRevenueAndOrdersQuery = () => {
  return useQuery({
    queryKey: ["revenue-orders"],
    queryFn: getAllRevenueAndOrders,
  });
};

export const useGetAllTypeChartQuery = () => {
  return useQuery({
    queryKey: ["type-chart"],
    queryFn: getAllTypeChart,
  });
};

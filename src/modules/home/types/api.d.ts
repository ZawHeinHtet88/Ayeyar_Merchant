import type { BaseApiResponse } from "@/types/global";
import type { category, ChartData } from ".";

export interface getAllStatsApiResponse extends BaseApiResponse {
  totalRevenue: {
    value: number;
  };
  totalOrders: {
    value: number;
    percentageChange: number;
  };
  totalCustomers: {
    value: number;
    percentageChange: number;
  };
  totalProducts: {
    value: number;
  };
}

export interface getAllRevenueAndOrderApiResponse extends BaseApiResponse{
    chartData : ChartData[],
    timestamp : string
}

export interface getAllTypeChartApiResponse extends BaseApiResponse {
  data: category[];
  categories: number;
  coverage: string;
}

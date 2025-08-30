import type { Pagination } from "@/components/ui/pagination";
import type { BaseApiResponse } from "@/types/global";
import type { Order, SaleHistory } from ".";

export interface getAllOrdersApiResponse extends BaseApiResponse {
  orders: Order[];
  pagination: Pagination;
}

export interface getAllSaleHistoriesApiResponse extends BaseApiResponse{
  data : SaleHistory
}
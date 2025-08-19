import type { Pagination } from "@/components/ui/pagination";
import type { BaseApiResponse } from "@/types/global";
import type { Order } from ".";

export interface getAllOrdersApiResponse extends BaseApiResponse {
  orders: Order[];
  pagination: Pagination;
}

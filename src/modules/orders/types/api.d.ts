import type { Pagination } from "@/components/ui/pagination";
import type { BaseApiResponse } from "@/types/global";

export interface getAllOrdersApiResponse extends BaseApiResponse {
  orders: Order[];
  pagination: Pagination;
}

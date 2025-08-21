import type { Pagination } from "@/components/ui/pagination";
import type { BaseApiResponse, Pagination } from "@/types/global";
import type { PaymentHistory } from ".";

export interface getAllpaymentHistoryApiResponse extends BaseApiResponse {
  data: PaymentHistory[];
  pagination: Pagination;
}

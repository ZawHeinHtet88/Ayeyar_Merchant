import type { BaseApiResponse, Pagination } from "@/types/global";
import type { Withdrawal } from ".";

export interface getAllWithdrawalApiResponse extends BaseApiResponse{
  data : Withdrawal[],
  pagination : Pagination
}
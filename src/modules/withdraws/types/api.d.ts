import type { BaseApiResponse } from "@/types/global";
import type { WithDraw } from ".";

export interface getAllWithdrawApiResponse extends BaseApiResponse {
  data: WithDraw[];
  pagination: Pagination;
}

export interface getTotalAmountApiResponse  {
  isSuccess : boolean,
  totalAmount :number
}
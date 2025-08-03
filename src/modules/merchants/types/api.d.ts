import type { Merchant } from ".";
import { BaseApiResponse, type Pagination } from "../../../types/global";

export interface getAllMerchantsApiResponse extends BaseApiResponse {
  data: Merchant[];
  pagination: Pagination;
}

export interface getSingleMerchantApiResponse extends BaseApiResponse {
  data : Merchant
}
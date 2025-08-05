import type { Pagination } from "@/types/global";

export interface getAllAdsApiResponse {
  data: Ads[];
  pagination:Pagination
}

export interface getAllTypeApiResponse {
  data : Type[];
  pagination: Pagination;
}
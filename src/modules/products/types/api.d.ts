import type { Product, Type } from ".";
import { BaseApiResponse } from "./../../../types/global.d";

export interface getAllProductsApiResponse extends BaseApiResponse {
  data: Product[];
  pagination: Pagination;
}


export interface getAllTypeApiResponse extends BaseApiResponse {
    data : Type[]
}
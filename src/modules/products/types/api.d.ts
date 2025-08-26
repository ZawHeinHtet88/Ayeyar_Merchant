import type { Product, SuggestProducts, Type } from ".";
import { BaseApiResponse } from "./../../../types/global.d";

export interface getAllProductsApiResponse extends BaseApiResponse {
  data: Product[];
  pagination: Pagination;
}

export interface getAllTypeApiResponse extends BaseApiResponse {
  data: Type[];
}

export interface getProductApiResponse extends BaseApiResponse {
  data: Product;
}

export interface getGeneratedProductApiResponse extends BaseApiResponse {
  products : SuggestProducts
}

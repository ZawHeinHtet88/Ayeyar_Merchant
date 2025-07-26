import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type {
  getAllProductsApiResponse,
  getAllTypeApiResponse,
} from "../types/api";

export const getAllProducts = async (filters: BasePagination) => {
  const res = await api.get<getAllProductsApiResponse>("/seller/products", {
    params: filters,
  });

  return res.data;
};

export const createProduct = async (data: FormData) => {
  const res = await api.post("/seller/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const deleteProduct = async (id: string) => {
  const res = await api.delete(`/seller/products`, {
    data: { productId: id },
  });

  return res.data;
};

export const getAllProductType = async () => {
  const res = await api.get<getAllTypeApiResponse>(`/user/types`);

  return res.data;
};

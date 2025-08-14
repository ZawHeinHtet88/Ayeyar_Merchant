import { api } from "@/lib/axios";
import {
    type getAllPaymentApiResponse,
    type singlePaymentApiResponse,
} from "../types/api";
import type { BaseApiResponse, BasePagination } from "@/types/global";

export const getAllPayments = async (filters: BasePagination) => {
  const res = await api.get<getAllPaymentApiResponse>("/seller/payments", {
    params: filters,
  });
  return res.data;
};

export const getPayment = async (id: string) => {
  const res = await api.get<singlePaymentApiResponse>(`/seller/payments/${id}`);
  return res.data;
};

export const createPayment = async (data: FormData) => {
  const res = await api.post<BaseApiResponse>("/seller/payments", data, {
    headers: {
      "Content-Type": "mulitpart/form-data",
    },
  });
  return res.data;
};

export const updatePayment = async (data: FormData) => {
  const res = await api.patch<BaseApiResponse>("/seller/payments", data, {
    headers: {
      "Content-Type": "mulitpart/form-data",
    },
  });
  return res.data;
};

export const deletePayment = async (id:string) => {
  const res = await api.delete<BaseApiResponse>("/seller/payments", {
    data : {id}
  });
  return res.data;
};



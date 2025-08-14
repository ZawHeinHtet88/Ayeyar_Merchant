import type { BasePagination } from "@/types/global";
import type { getAllAdsApiResponse } from "../types/api";
import { api } from "@/lib/axios";

export const getAllAds = async (filters: BasePagination) => {
  const res = await api.get<getAllAdsApiResponse>("/admin/ads", {
    params: filters,
  });
  return res.data;
};

export const createAds = async ({ data }: { data: FormData }) => {
  const res = await api.post("/admin/ads", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const updateAds = async ({ data }: { data: FormData }) => {
  const res = await api.patch(`/admin/ads`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteAds = async (ads_id: string) => {
  const res = await api.delete(`/admin/ads`, {
    data: {
      id: ads_id,
    },
  });
  return res.data;
};

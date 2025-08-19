import type { BasePagination } from "@/types/global";
import type { getAllAdsApiResponse, getAllTypeApiResponse } from "../types/api";
import { api } from "@/lib/axios";

export const getAllAds = async (filters: BasePagination) => {
  const res = await api.get<getAllAdsApiResponse>("/admin/ads", {
    params: filters,
  });
  return res.data;
};

export const getAllTypes = async (filters: BasePagination) => {
  const res = await api.get<getAllTypeApiResponse>("/admin/types", {
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

export const createType = async ({ data }: { data: FormData }) => {
  const res = await api.post("/admin/types", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const updateAds = async ({ data }: { data: FormData }) => {
  const res = await api.patch(`/admin/types`, {
    data,
  });
  return res.data;
};

export const updateType = async ({ data }: { data: FormData }) => {
  const res = await api.patch(
    `/admin/types`,

    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
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

export const deleteType = async (type_id: string) => {
  const res = await api.delete(`/admin/types`, {
    data: {
      id: type_id,
    },
  });
  return res.data;
};

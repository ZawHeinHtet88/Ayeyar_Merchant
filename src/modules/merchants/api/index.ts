import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type {
  getAllMerchantsApiResponse,
  getSingleMerchantApiResponse,
} from "../types/api";
// import type { getAllProductsApiResponse, getAllTypeApiResponse, getProductApiResponse } from "../types/api";

export const getAllMerchants = async (filters: BasePagination) => {
  const res = await api.get<getAllMerchantsApiResponse>("/admin/sellers", {
    params: filters,
  });

  return res.data;
};

export const createMerchant = async ({ data }: { data: FormData }) => {
  const res = await api.post("/admin/sellers", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const deleteMerchant = async (id: string) => {
  const res = await api.delete(`/admin/sellers/${id}`);

  return res.data;
};

// export const getAllProductType = async () => {
//   const res = await api.get<getAllTypeApiResponse>(`/user/types`);

//   return res.data;
// };

export const getMerchant = async (id: string) => {
  const res = await api.get<getSingleMerchantApiResponse>(
    `/admin/sellers/${id}`
  );

  return res.data;
};

export const updateMerchant = async ({
  data,
}: {
  data: FormData;
}) => {
  const res = await api.patch(
    `/admin/sellers`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

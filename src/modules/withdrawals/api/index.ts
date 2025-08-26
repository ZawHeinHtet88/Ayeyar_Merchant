import { api } from "@/lib/axios";
import type { BasePagination } from "@/types/global";
import type { getAllWithdrawalApiResponse } from "../types/api";

export const getWithdrawals = async (filters: BasePagination) => {
  const res = await api.get<getAllWithdrawalApiResponse>(
    "/admin/payments/withdraw",
    {
      params: filters,
    }
  );

  return res.data;
};


export const updateWithdrawal = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  const res = await api.patch(`/admin/payments/withdraw/${id}`, {
    status,
  });
  return res.data;
};

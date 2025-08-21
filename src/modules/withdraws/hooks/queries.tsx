import type { BasePagination } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import { getAllWithdraw, getTotalAmount } from "../api";

export const useGetAllWidthdrawQuery = (filters: BasePagination) => {
  return useQuery({
    queryKey: ["widthdraw", filters],
    queryFn: () => getAllWithdraw(filters),
  });
};

export const useGetTotalAmountQuery = () => {
  return useQuery({
    queryKey: ["total-amount"],
    queryFn: () => getTotalAmount(),
  });
};

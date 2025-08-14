import { useQuery } from "@tanstack/react-query";
import { getAllPayments, getPayment } from "../api";
import type { BasePagination } from "@/types/global";

export const useGetAllPaymentsQuery = (filters: BasePagination) => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: () => getAllPayments(filters),
  });
};

export const useGetPaymentQuery = (id: string) => {
  return useQuery({
    queryKey: ["payment"],
    queryFn: () => getPayment(id),
  });
};

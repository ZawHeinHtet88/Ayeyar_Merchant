import { useQuery } from "@tanstack/react-query";
import { getAllAds } from "../api";
import type { BasePagination } from "@/types/global";

export const useGetAllAdsQuery = (filters: BasePagination) => {
  return useQuery({
    queryKey: ["ads",filters],
    queryFn: () => getAllAds(filters),
  });
};

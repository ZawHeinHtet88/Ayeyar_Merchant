import { useQuery } from "@tanstack/react-query";
import { getAllAds, getAllTypes } from "../api";
import type { BasePagination } from "@/types/global";

export const useGetAllAdsQuery = (filters: BasePagination) => {
  return useQuery({
    queryKey: ["ads"],
    queryFn: () => getAllAds(filters),
  });
};

export const useGetAllTypeQuery = (filters:BasePagination) => {
  return useQuery({
    queryKey : ["types"],
    queryFn: () => getAllTypes(filters)
  })
}

import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getAllProductType } from "../api"
import type { BasePagination } from "@/types/global"

export const useGetAllProductQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: ()=>getAllProducts(filters)
    })
}

export const useGetAllTypeQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProductType,
  });
};
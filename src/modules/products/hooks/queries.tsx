import type { BasePagination } from "@/types/global"
import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getAllProductType, getProduct } from "../api"

export const useGetAllProductQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey: ["products",filters],
        queryFn: ()=>getAllProducts(filters)
    })
}

export const useGetAllTypeQuery = () => {
  return useQuery({
    queryKey: ["types"],
    queryFn: getAllProductType,
  });
};

export  const useGetProductQuery = (id:string) => {
  return useQuery({
    queryKey : ["product",id],
    queryFn : () => getProduct(id)
  })
}


// import { useQuery } from "@tanstack/react-query"
// import { getAllProducts, getAllProductType, getProduct } from "../api"
// import type { BasePagination } from "@/types/global"

import type { BasePagination } from "@/types/global"
import { useQuery } from "@tanstack/react-query"
import { getAllMerchants, getMerchant } from "../api"

export const useGetAllMerchantsQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey: ["merchants",filters],
        queryFn: ()=>getAllMerchants(filters)
    })
}

// export const useGetAllTypeQuery = () => {
//   return useQuery({
//     queryKey: ["types"],
//     queryFn: getAllProductType,
//   });
// };

export  const useGetMerchantQuery = (id:string) => {
  return useQuery({
    queryKey : ["merchant"],
    queryFn : () => getMerchant(id)
  })
}
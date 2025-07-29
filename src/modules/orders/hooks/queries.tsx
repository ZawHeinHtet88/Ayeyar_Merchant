import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../api"
import type { BasePagination } from "@/types/global"


export const useGetAllOrdersQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey : ["orders",filters],
        queryFn : ()=>getOrders(filters)
    })
}
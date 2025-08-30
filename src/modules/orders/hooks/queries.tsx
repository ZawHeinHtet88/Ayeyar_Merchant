import { useQuery } from "@tanstack/react-query"
import { getOrders, saleHistory } from "../api"
import type { BasePagination } from "@/types/global"

export const useGetAllOrdersQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey : ["orders",filters],
        queryFn : ()=>getOrders(filters)
    })
}

export const useGetAllSaleHistoryQuery = ()=> {
    return useQuery({
        queryKey : ['sale-history'],
        queryFn : saleHistory
    })
}
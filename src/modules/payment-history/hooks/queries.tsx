import type { BasePagination } from "@/types/global"
import { useQuery } from "@tanstack/react-query"
import { getPaymentHistories } from "../api"

export const useGetAllPaymentHistoryQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey : ["payment-histories",filters],
        queryFn : ()=>getPaymentHistories(filters)
    })
}
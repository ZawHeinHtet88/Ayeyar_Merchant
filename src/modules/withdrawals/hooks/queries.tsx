import type { BasePagination } from "@/types/global"
import { useQuery } from "@tanstack/react-query"
import { getWithdrawals } from "../api"

export const useGetAllWithdrawalQuery = (filters:BasePagination) => {
    return useQuery({
        queryKey : ["withdrawals",filters],
        queryFn : () => getWithdrawals(filters)
    })
}
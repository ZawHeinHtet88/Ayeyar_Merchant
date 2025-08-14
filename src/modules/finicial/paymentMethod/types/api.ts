import type { BaseApiResponse, Pagination } from "@/types/global";
import type { Payment } from ".";

export interface getAllPaymentApiResponse extends BaseApiResponse{
    data : Payment[]
    pagination : Pagination
}

export interface singlePaymentApiResponse extends BaseApiResponse{
    data : Payment
}
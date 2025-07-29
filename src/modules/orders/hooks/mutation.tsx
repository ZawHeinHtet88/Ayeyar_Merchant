import { useMutation } from "@tanstack/react-query";
import { updateOrder } from "../api";

export const useUpdateOrderMutation = () => 
    useMutation({
        mutationFn : updateOrder
    })
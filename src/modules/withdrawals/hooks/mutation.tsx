import { useMutation } from "@tanstack/react-query";
import { updateWithdrawal } from "../api";

export const useUpdateWithdrawalMutation = () =>
    useMutation({
        mutationFn : updateWithdrawal
    })
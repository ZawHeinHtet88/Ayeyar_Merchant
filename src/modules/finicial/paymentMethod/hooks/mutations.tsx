import { useMutation } from "@tanstack/react-query";
import { createPayment, deletePayment, updatePayment } from "../api";

export const useCreatePaymentMutation = () =>
  useMutation({
    mutationFn: createPayment,
  });

export const useUpdatePaymentMutation = () =>
  useMutation({
    mutationFn: updatePayment,
  });

export const  useDeletePaymentMutation = () => 
    useMutation({
        mutationFn : deletePayment
    })

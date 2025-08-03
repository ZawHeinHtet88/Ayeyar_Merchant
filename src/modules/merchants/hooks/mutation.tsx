// import { useMutation } from "@tanstack/react-query";
// import { createProduct, deleteProduct, updateProduct } from "../api";

import { useMutation } from "@tanstack/react-query";
import { createMerchant, deleteMerchant, updateMerchant } from './../api/index';

export const useCreateMerchantMutation = () =>
  useMutation({
    mutationFn: createMerchant,
  });

export const useDeleteMerchantMutation = () =>
  useMutation({
    mutationFn: deleteMerchant   
  });

export const useUpdateMerchantMutation= () =>
  useMutation({
    mutationFn :updateMerchant
  })
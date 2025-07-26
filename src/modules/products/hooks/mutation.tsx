import { useMutation } from "@tanstack/react-query";
import { createProduct, deleteProduct } from "../api";

export const useCreateProductMutation = () =>
  useMutation({
    mutationFn: createProduct,
  });

export const useDeleteProdcutMutation = () =>
  useMutation({
    mutationFn: deleteProduct   
  });

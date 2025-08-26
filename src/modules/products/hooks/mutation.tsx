import { useMutation } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  getGeneratedProduct,
  updateProduct,
} from "../api";

export const useCreateProductMutation = () =>
  useMutation({
    mutationFn: createProduct,
  });

export const useDeleteProdcutMutation = () =>
  useMutation({
    mutationFn: deleteProduct,
  });

export const useUpdateProductMutation = () =>
  useMutation({
    mutationFn: updateProduct,
  });

export const useGenerateProductMutation = () =>
  useMutation({
    mutationFn: getGeneratedProduct,
  });

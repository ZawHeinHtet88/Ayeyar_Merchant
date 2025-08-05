import { useMutation } from "@tanstack/react-query";
import { createAds, deleteAds, updateAds } from "../api";

export const useCreateAdsMutation = () =>
  useMutation({
    mutationFn: createAds,
  });

export const useDeleteAdsMutation = () =>
  useMutation({
    mutationFn: deleteAds  
  });

export const useUpdateAdsMutation= () =>
  useMutation({
    mutationFn : updateAds
  })
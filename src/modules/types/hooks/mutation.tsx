import { useMutation } from "@tanstack/react-query";
import {
  createAds,
  createType,
  deleteAds,
  deleteType,
  updateAds,
  updateType,
} from "../api";

export const useCreateAdsMutation = () =>
  useMutation({
    mutationFn: createAds,
  });

export const useDeleteAdsMutation = () =>
  useMutation({
    mutationFn: deleteAds,
  });

export const useUpdateAdsMutation = () =>
  useMutation({
    mutationFn: updateAds,
  });

export const useCreateTypeMutation = () =>
  useMutation({
    mutationFn: createType,
  });

export const useDeleteTypeMutation = () =>
  useMutation({
    mutationFn: deleteType,
  });

export const useUpdateTypeMutation = () =>
  useMutation({
    mutationFn: updateType,
  });

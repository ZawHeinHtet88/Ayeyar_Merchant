import { useMutation } from "@tanstack/react-query";
import { login } from "../../api";

export const useLoginMutation = () =>
  useMutation({
    mutationFn: login,
  });

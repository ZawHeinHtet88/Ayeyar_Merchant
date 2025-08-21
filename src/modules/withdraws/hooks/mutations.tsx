import { useMutation } from "@tanstack/react-query";
import { makeWithdraw } from "../api";

export const useMakeWithdrawMutation = () =>
  useMutation({
    mutationFn: makeWithdraw,
  });

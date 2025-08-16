import { api } from "@/lib/axios";
import type { getAllContactApiResponse, getAllMessageApiResponse } from "../types";


export const getContacts = async () => {
  const res = await api.get<getAllContactApiResponse>("/message/dm");
  return res.data;
};

export const getAllMessages = async (id: string) => {
  const res = await api.post<getAllMessageApiResponse>("/message", {
    data: { id },
  });

  return res.data;
};

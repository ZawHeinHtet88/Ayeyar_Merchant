import { useQuery } from "@tanstack/react-query";
import { getAllMessages, getContacts } from "../api";

export const useGetAllContactsQuery = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });
};

export const useGetAllMessagesQuery = (id: string) => {
  return useQuery({
    queryKey: ["messages", id], 
    queryFn: () => getAllMessages(id),
  });
}
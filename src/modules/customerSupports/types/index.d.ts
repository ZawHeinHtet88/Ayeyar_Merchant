import type { BaseApiResponse } from "@/types/global";
import type { Contact, Message } from "./api";

export interface getAllContactApiResponse {
  contacts: Contact[];
}

export interface getAllMessageApiResponse extends BaseApiResponse {
  data: Message[];
}

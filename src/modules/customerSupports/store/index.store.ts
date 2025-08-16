import { create } from "zustand";

interface Message {
  message: string;
  sender: string;
}
type SupportChatStore = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  setMessages: (msgs: Message[]) => void;
};

export const useSupportChatStore = create<SupportChatStore>()((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  setMessages: (messages) => set({ messages }),

  resetChat: () =>
    set({
      messages: [],
    }),
}));

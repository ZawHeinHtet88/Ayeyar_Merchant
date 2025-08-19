import { create } from "zustand";

interface Message {
  message: string;
  sender: string;
}
type SupportChatStore = {
  messages: Message[];
  selectedUsername: string;
  setSelectedUsername: (name: string) => void;
  addMessage: (msg: Message) => void;
  setMessages: (msgs: Message[]) => void;
};

export const useSupportChatStore = create<SupportChatStore>()((set) => ({
  messages: [],
  selectedUsername: "",
  setSelectedUsername: (name) =>  
    set(() => ({
      selectedUsername: name,
    })),
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

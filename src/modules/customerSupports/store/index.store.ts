import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Message {
  message: string;
  sender: string;
}
type SupportChatStore = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  setMessages: (msgs: Message[]) => void;
};

export const useSupportChatStore = create<SupportChatStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "support-chat-storage-dashboard", // localStorage key
      partialize: (state) => ({
        // Choose which fields to store in localStorage
        messages: state.messages,
      }),
    }
  )
);

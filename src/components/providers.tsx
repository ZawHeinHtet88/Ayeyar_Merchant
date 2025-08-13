import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./theme-provider";
// import { SocketProvider } from "./socket-provider";
import type { ReactNode } from "react";
import { Socket } from "socket.io-client";
import { SocketProvider } from "@/hooks/use-socket";
import { useAuthStore } from "@/modules/auth/store/index.store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  const {user} = useAuthStore((state) => state);
  const userInfo = { _id: user?.id ?? "", name: user?.name ?? "" };
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        {/*
        <SocketProvider>
        */}
        <SocketProvider userInfo={userInfo}>{children}</SocketProvider>
        {/* </SocketProvider> */}
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

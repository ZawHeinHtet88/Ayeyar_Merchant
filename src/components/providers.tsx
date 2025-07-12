import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./theme-provider";
// import { SocketProvider } from "./socket-provider";
import type { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        {/*
        <SocketProvider>
        */}
        {children}
        {/* </SocketProvider> */}
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

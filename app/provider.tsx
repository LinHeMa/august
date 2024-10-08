import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}

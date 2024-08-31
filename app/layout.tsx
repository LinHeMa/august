// import type { Metadata } from "next";
"use client";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Header />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

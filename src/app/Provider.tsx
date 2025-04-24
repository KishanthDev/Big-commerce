"use client"
import { ThemeProvider } from "@/components/theme-provider";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/header/Header";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HeroUIProvider>
        <Header />
        {children}
      </HeroUIProvider>
    </ThemeProvider>
  );
}

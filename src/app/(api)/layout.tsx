// app/(auth)/auth/layout.tsx
import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-black">
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
}

// app/(auth)/auth/layout.tsx
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-black">
      {children}
    </div>
  );
}

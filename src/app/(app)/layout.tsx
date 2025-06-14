import AuthLayout from "@/components/layouts/AuthLayout";
import { ClerkProvider } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <AuthLayout>{children}</AuthLayout>
    </ClerkProvider>
  );
}

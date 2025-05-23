// app/(auth)/auth/layout.tsx
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-black">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
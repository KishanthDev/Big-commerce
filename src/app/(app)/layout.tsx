// app/(auth)/auth/layout.tsx
"use client"
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Sidebar from '@/components/Sidebar';
import type { ReactNode } from 'react';
import { useState } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-gray-100 dark:bg-black">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
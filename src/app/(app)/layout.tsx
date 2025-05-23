"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";
import { useState } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden h-screen w-full bg-gray-100 dark:bg-black">
      {/* Sidebar with independent scroll */}
      <div className="h-full overflow-y-auto">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content with independent scroll */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

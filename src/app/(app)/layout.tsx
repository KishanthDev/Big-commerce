"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";
import { useSidebarStore } from "@/stores/useSidebarStore";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { isOpen, closeSidebar } = useSidebarStore();

  return (
    <div className="relative h-screen w-full flex flex-col bg-gray-100 dark:bg-black">
      {/* Sidebar Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-opacity-50 z-40"
            onClick={closeSidebar}
          />

          {/* Sidebar wrapper with scrollable content */}
          <div className="fixed top-0 left-0 h-full z-50 bg-white dark:bg-zinc-900 shadow-lg overflow-y-auto">
            <Sidebar />
          </div>
        </>
      )}

      {/* Main content area */}
      <div className="relative flex-1 flex-col h-full z-10">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

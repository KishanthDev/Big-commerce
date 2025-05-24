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
            className="fixed inset-0 bg-black/20 z-40"
            onClick={closeSidebar}
          />

          <div className="fixed top-0 left-0 h-full z-50 bg-white dark:bg-zinc-900 shadow-lg overflow-y-auto">
            <Sidebar />
          </div>

          <button
            onClick={closeSidebar}
            className="absolute top-4 left-[290px] z-50 px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-md"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </>
      )}

      <div
        className={`relative flex-1 flex-col h-full z-10 transition duration-300 ${isOpen ? "pointer-events-none overflow-hidden select-none blur-sm" : ""
          }`}
        aria-hidden={isOpen ? "true" : "false"}
      >
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>

  );
}

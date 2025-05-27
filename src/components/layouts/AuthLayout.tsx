"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { isOpen, closeSidebar } = useSidebarStore();

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 0.1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative h-screen w-full flex flex-col bg-gray-100 dark:bg-black">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/10 z-40"
              onClick={closeSidebar}
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
            />
            <motion.div
              className="fixed top-0 left-0 h-full z-50 bg-white dark:bg-zinc-900 shadow-lg overflow-y-auto"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ width: "280px" }}
            >
              <Sidebar />
            </motion.div>
            <motion.button
              onClick={closeSidebar}
              className="absolute top-4 left-[290px] z-50 px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-md"
              aria-label="Close sidebar"
              variants={buttonVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              ✕
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </div>

      <div
        className={`pt-[64px] flex-1 flex-col h-full z-10 transition duration-300 ${isOpen ? "pointer-events-none overflow-hidden select-none" : ""
          }`}
        aria-hidden={isOpen ? "true" : "false"}
      >
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

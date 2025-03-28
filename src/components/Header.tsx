"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white shadow-md p-4 fixed top-0 left-0 w-full flex justify-between items-center z-50 transition-all"
        >
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={115} height={115} />
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-700 hover:text-gray-900">Platform</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Resources</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm">
              REQUEST A DEMO
            </Button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg border border-gray-200 md:hidden rounded-b-lg z-50">
              <nav className="flex flex-col items-center space-y-4 py-6">
                <Link href="#" className="text-gray-700 hover:text-gray-900">Platform</Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900">Services</Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900">Resources</Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
              </nav>
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;

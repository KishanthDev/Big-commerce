"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 left-0 w-full z-50"
    >
      <div className="hidden md:flex bg-gray-50 text-gray-800 py-2 px-6 justify-end items-center text-sm font-medium shadow-md">
        <Link href="#" className="hover:text-gray-900 mr-4">Help Center</Link>
        <Link href="#" className="hover:text-gray-900 mr-4">Developer Center</Link>
        <span className="mr-4">Call Sales: 1-888-248-9325</span>
        <Link href="#" className="text-gray-700 hover:text-black">Log In</Link>
        <select aria-label="Select country" className="bg-transparent text-gray-700 border-none focus:outline-none">
          <option value="us">🇺🇸 US</option>
          <option value="uk">🇬🇧 UK</option>
          <option value="in">🇮🇳 India</option>
          <option value="ca">🇨🇦 Canada</option>
        </select>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white shadow-md p-4 w-full flex items-center justify-between transition-all"
      >
        <Image src="/logo.png" alt="Logo" width={115} height={115} className="ml-4" />
        <nav className="hidden md:flex space-x-6">
          {["Platform", "Services", "Resources", "Pricing"].map((item) => (
            <Link href="#" key={item} className="relative flex text-black font-medium transition-all group cursor-pointer">
              {item}
              <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
        <Button variant="blue" className="bg-blue-600 text-white hover:bg-blue-700">
            REQUEST A DEMO
          </Button>
          <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-4">
            {["Platform", "Services", "Resources", "Pricing"].map((item) => (
              <Link href="#" key={item} className="text-black font-medium hover:text-blue-500">{item}</Link>
            ))}
          </div>
          <hr className="border-gray-800 w-full" />
          <div className="flex flex-col space-y-2">
            <Link href="#" className="text-gray-700 hover:text-gray-900">Help Center</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Developer Center</Link>
            <span className="text-gray-700">Call Sales: 1-888-248-9325</span>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Log In</Link>
          </div>
          <hr className="border-gray-800 w-full" />
          <select aria-label="Select country" className="bg-transparent text-gray-700 border border-gray-400 rounded px-2 py-1 focus:outline-none">
            <option value="us">🇺🇸 United States</option>
            <option value="uk">🇬🇧 United Kingdom</option>
            <option value="in">🇮🇳 India</option>
            <option value="ca">🇨🇦 Canada</option>
          </select>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;

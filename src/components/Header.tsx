"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={115} height={115} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="#" className="text-gray-700 hover:text-gray-900">Platform</Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">Services</Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">Resources</Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
      </nav>

      {/* Right: Request a Demo & Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Request a Demo (Always Visible) */}
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm">
          REQUEST A DEMO
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900">Platform</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Resources</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

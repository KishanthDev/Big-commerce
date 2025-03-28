import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={115} height={115} />

        <nav className="ml-6 space-x-6 hidden md:flex">
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Platform</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Services</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Resources</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Pricing</span>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
          REQUEST A DEMO
        </Button>
      </div>
    </header>
  );
};

export default Header;

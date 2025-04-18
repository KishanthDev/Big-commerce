"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { DarkModeToggle } from "./ModeToggle";
import FullScreenToggle from "./FullScreenToggle";
import { LayoutList } from "lucide-react";

type HeaderProps = {
  onToggleCategory: () => void;
  isCategoryOpen: boolean;
};

const Header = ({ onToggleCategory, isCategoryOpen }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 left-0 w-full z-50"
    >
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white dark:bg-blue-950 shadow-md p-4 w-full flex items-center justify-between transition-all"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={115}
          height={115}
          className="ml-4"
        />

        <nav className="hidden md:flex space-x-6"></nav>

        <div className="hidden md:flex items-center space-x-4">
          <LayoutList
            className={`border ${
              isCategoryOpen ? "bg-blue-800" : "bg-blue-600"
            } border-blue-500 p-1.5 w-8 h-8 rounded-md cursor-pointer`}
            onClick={onToggleCategory}
          />
          <Button
            variant="blue"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign Up / Sign In
          </Button>
          <FullScreenToggle />
          <DarkModeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <FullScreenToggle />
          <DarkModeToggle />
          <button
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white text-2xl"
          >
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
          className="md:hidden bg-white dark:bg-blue-950 shadow-md py-4 px-6 flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-4">
            {[
              "Home",
              "Sellers",
              "Buyers",
              "Advertising",
              "Blog",
              "Contact",
            ].map((item) => (
              <Link
                href="#"
                key={item}
                className="text-black dark:text-white font-medium hover:text-blue-500"
              >
                {item}
              </Link>
            ))}
          </div>

          <hr className="border-gray-800 dark:border-gray-600 w-full" />

          <div data-testid="mobile-menu" className="flex flex-col space-y-2">
            <Link
              href="#"
              className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
            >
              Developer Center
            </Link>
            <span className="text-gray-700 dark:text-white">
              Call Sales: 1-888-248-9325
            </span>
            <Link
              href="#"
              className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
            >
              Log In
            </Link>

            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full text-sm">
              Sign Up / Sign In
            </Button>
          </div>

          <hr className="border-gray-800 dark:border-gray-600 w-full" />

          <select
            aria-label="Select country"
            className="bg-background text-foreground border border-border rounded px-2 py-1 focus:outline-none transition-colors"
          >
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

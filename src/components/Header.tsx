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
import { usePathname } from "next/navigation";
import styles from "./Link.module.css";
import LocationModal from "./LocationModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 left-0 w-full z-50"
    >
      <div className="hidden md:flex bg-gray-50 dark:bg-blue-900 text-gray-800 dark:text-gray-100 h-10 py-2 px-6 justify-end items-center text-sm font-medium shadow-md">
        <Link
          href="#"
          className="hover:text-gray-900 dark:hover:text-white mr-4"
        >
          Help Center
        </Link>
        <Link
          href="#"
          className="hover:text-gray-900 dark:hover:text-white mr-4"
        >
          Developer Center
        </Link>
        <span className="mr-4">Call Sales: 1-888-248-9325</span>
        <Link
          href="#"
          className="text-gray-700 dark:text-gray-100 hover:text-black dark:hover:text-white"
        >
          Log In
        </Link>
        <select
          aria-label="Select country"
          className="bg-transparent text-gray-700 dark:text-white border-none focus:outline-none ml-2"
        >
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
        className="bg-white dark:bg-blue-950 shadow-md p-4 h-16 w-full flex items-center justify-between transition-all"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={115}
            height={115}
            className="ml-4"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-black dark:text-white font-medium px-2 py-1 rounded-sm transition-all ${
              pathname === "/"
                ? "border border-blue-500 bg-blue-50 dark:bg-blue-900 cursor-default"
                : `hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer ${styles.underlineHover}`
            }`}
          >
            Home
          </Link>
          {["Sellers", "Buyers", "Advertising", "Blog", "Contact"].map(
            (item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = pathname === path;

              return (
                <Link
                  href={path}
                  key={item}
                  className={`text-black dark:text-white font-medium px-2 py-1 rounded-sm transition-all ${
                    isActive
                      ? "border border-blue-500 bg-blue-50 dark:bg-blue-900 cursor-default"
                      : `hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer relative group`
                  }`}
                >
                  {item}
                  {!isActive && (
                    <span className="absolute left-2 right-2 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  )}
                </Link>
              );
            },
          )}
        </nav>
        <LocationModal/>

        <div className="hidden md:flex items-center space-x-4">
          <Link href={pathname === "/" ? "/categories" : "/"}>
            <LayoutList
              className={`border ${pathname !== "/" ? "bg-blue-800" : "bg-blue-600"} border-blue-500 p-1.5 w-8 h-8 rounded-md cursor-pointer`}
            />
          </Link>
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
            <Link
              href="/"
              className={`text-black dark:text-white font-medium px-2 py-1 rounded-sm transition-all ${
                pathname === "/"
                  ? "border border-blue-500 bg-blue-50 dark:bg-blue-900 cursor-default"
                  : `hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer ${styles.underlineHover}`
              }`}
            >
              Home
            </Link>
            {["Sellers", "Buyers", "Advertising", "Blog", "Contact"].map(
              (item) => {
                const path = `/${item.toLowerCase()}`;
                const isActive = pathname === path;

                return (
                  <Link
                    href={path}
                    key={item}
                    className={`text-black dark:text-white font-medium px-2 py-1 rounded-sm transition-all ${
                      isActive
                        ? "border border-blue-500 bg-blue-50 dark:bg-blue-900 cursor-default"
                        : `hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer relative group`
                    }`}
                  >
                    {item}
                    {!isActive && (
                      <span className="absolute left-2 right-2 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    )}
                  </Link>
                );
              },
            )}
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

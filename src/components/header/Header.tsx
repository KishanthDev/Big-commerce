"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { DarkModeToggle } from "./ModeToggle";
import FullScreenToggle from "./FullScreenToggle";
import { usePathname } from "next/navigation";
import styles from "./Link.module.css";
import CategoryCarousel from "../Slider";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Sellers", path: "/sellers" },
    { label: "Buyers", path: "/buyers" },
    { label: "Advertising", path: "/advertising" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.div className="sticky top-0 left-0 w-full z-50">
      <motion.header className="bg-white dark:bg-blue-950 p-4 pt-6 h-16 flex items-center justify-between transition-all relative">
        <Link href="/">
          <div className="hidden md:block">
            <Image
              src="/logo.png"
              alt="Logo"
              width={115}
              height={115}
              className="ml-4"
            />
          </div>
        </Link>


        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                href={path}
                key={label}
                className={`text-black dark:text-white font-medium px-2 py-1 rounded-sm transition-all ${isActive
                  ? "border border-blue-500 bg-blue-50 dark:bg-blue-900 cursor-default"
                  : `hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer ${styles.underlineHover}`
                  }`}
              >
                {label}
                {!isActive && (
                  <span className="absolute left-2 right-2 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            );
          })}
        </nav>
{/*         <LocationModal />
 */}
        {/* Desktop Right Side Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <Link href={pathname === "/home" ? "/categories" : "/"}>
            <LayoutList
              className={`border ${pathname !== "/home" ? "bg-blue-700" : "bg-blue-600"} text-white border-blue-500 p-1.5 w-8 h-8 rounded-md cursor-pointer`}
            />
          </Link> */}
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="blue"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up free
            </Button>
          </Link>
          <FullScreenToggle />
          <DarkModeToggle />
        </div>

        {/* Always-visible Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-2 absolute top-4 right-4 z-50">
          <FullScreenToggle />
          <DarkModeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      <div className="bg-white dark:bg-blue-950 shadow-md">
        <CategoryCarousel />
      </div>

      {menuOpen && (
        <motion.div
          id="mobile-menu"
          data-testid="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-blue-950 shadow-md py-4 px-6 flex flex-col space-y-4"
        >
          {navLinks.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                href={path}
                key={label}
                className={`text-black dark:text-white font-medium px-2 py-1 rounded-sm transition-all ${isActive
                  ? "border border-blue-500 bg-blue-50 dark:bg-blue-900 cursor-default"
                  : `hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer relative group`
                  }`}
              >
                {label}
                {!isActive && (
                  <span className="absolute left-2 right-2 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    {}
  );

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "PRODUCT",
      links: ["Features", "Services", "Enterprise Pricing", "Request a Demo"],
    },
    {
      title: "PARTNERS",
      links: [
        "Overview",
        "Become a Partner",
        "Find an Agency Partner",
        "Find a Technology Partner",
        "Affiliates",
        "Powered by",
      ],
    },
    {
      title: "CUSTOMERS",
      links: ["Case Studies", "Store Examples"],
    },
    {
      title: "RESOURCES",
      links: [
        "Overview",
        "Articles",
        "Guides & White Papers",
        "Webinars",
        "Podcast",
        "Reports",
        "Events",
        "Ecommerce Blog",
        "Developer Blog",
        "Free Tools",
      ],
    },
    {
      title: "USE CASE SOLUTIONS",
      links: [
        "Multi-Storefront",
        "Headless Commerce",
        "82B Wholesale",
        "Omnichannel",
        "International",
        "Commerce-as-a-Service",
        "Emerging Brands",
        "Small Business",
        "Enterprise",
        "Crypto",
        "Migration",
      ],
    },
    {
      title: "INDUSTRY SOLUTIONS",
      links: [
        "Fashion & Apparel",
        "Health & Beauty",
        "Food & Beverage",
        "Manufacturing",
        "Automotive",
        "CBD",
        "Home & Garden",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Leaders",
        "Careers",
        "Press",
        "Awards",
        "Investor Relations",
        "Platform Trust Center",
        "Contact Us",
      ],
    },
    {
      title: "HELP CENTER",
      links: [
        "BigCommerce Community",
        "Knowledge Base",
        "Videos",
        "Contact Tech Support",
        "Developer Center",
        "API Documentation",
        "Theme Documentation",
      ],
    },
  ];

  return (
    <footer className="bg-blue-800 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <button
                aria-label={`Toggle ${section.title}`}
                data-testid={`toggle-${index}`}
                className="w-full flex justify-between items-center text-lg font-bold mb-2 md:mb-4 md:hidden px-4"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <h2
                data-testid={`section-title-${section.title}`}
                className="hidden md:block font-bold text-xl mb-4 pl-4">
                {section.title}
              </h2>
              <ul
                className={`space-y-2 pl-4 ${openSections[index] ? "block " : "hidden"
                  } md:block`}
              >
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href="#" data-testid={`link-${link}`} className="hover:underline hover:text-gray-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-6 border-t border-gray-600 mt-12 pt-6">
          <FaFacebookF data-testid="facebook-icon" className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn data-testid="linkedin-icon" className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaYoutube data-testid="youtube-icon" className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaPinterestP data-testid="pinterest-icon" className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaInstagram data-testid="instagram-icon" className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>

        <div className="text-center text-xs mt-6 text-gray-300">
          <p>© Copyright 2003 - 2025 BigCommerce Pty. Ltd.</p>
          <p className="mt-2">
            <Link href="#" className="hover:underline hover:text-gray-200">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline hover:text-gray-200">
              Website Terms of Use
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline hover:text-gray-200">
              Master Services Agreement
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline hover:text-gray-200">
              Legal Archives
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline hover:text-gray-200">
              Sitemap
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline hover:text-gray-200">
              Cookie Settings
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

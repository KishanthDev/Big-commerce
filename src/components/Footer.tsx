"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

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
      links: ["Overview", "Become a Partner", "Find an Agency Partner", "Find a Technology Partner", "Affiliates", "Powered by"],
    },
    {
      title: "CUSTOMERS",
      links: ["Case Studies", "Store Examples"],
    },
    {
      title: "RESOURCES",
      links: ["Overview", "Articles", "Guides & White Papers", "Webinars", "Podcast", "Reports", "Events", "Ecommerce Blog", "Developer Blog", "Free Tools"],
    },
    {
      title: "USE CASE SOLUTIONS",
      links: ["Multi-Storefront", "Headless Commerce", "82B Wholesale", "Omnichannel", "International", "Commerce-as-a-Service", "Emerging Brands", "Small Business", "Enterprise", "Crypto", "Migration"],
    },
    {
      title: "INDUSTRY SOLUTIONS",
      links: ["Fashion & Apparel", "Health & Beauty", "Food & Beverage", "Manufacturing", "Automotive", "CBD", "Home & Garden"],
    },
    {
      title: "COMPANY",
      links: ["About Us", "Leaders", "Careers", "Press", "Awards", "Investor Relations", "Platform Trust Center", "Contact Us"],
    },
    {
      title: "HELP CENTER",
      links: ["BigCommerce Community", "Knowledge Base", "Videos", "Contact Tech Support", "Developer Center", "API Documentation", "Theme Documentation"],
    },
  ];

  return (
    <footer className="bg-blue-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mb-6 md:mb-0">
            <button
              className="w-full flex justify-between items-center text-lg font-bold mb-2 md:mb-4 md:hidden"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <h3 className="hidden md:block font-bold text-lg mb-4">{section.title}</h3>
            <ul className={`space-y-2 ${openSections[index] ? "block " : "hidden"} md:block`}>
              {section.links.map((link, idx) => (
                <li key={idx}><Link href="#" className="hover:underline">{link}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex justify-center space-x-6 border-t border-gray-600 mt-12 pt-6">
          {[FaFacebookF, FaLinkedinIn, FaYoutube, FaPinterestP, FaInstagram].map((Icon, index) => (
            <Icon key={index} className="text-2xl cursor-pointer hover:text-gray-400" />
          ))}
        </div>

        <div className="text-center text-xs mt-6 text-gray-400">
          <p>© Copyright 2003 - 2025 BigCommerce Pty. Ltd.</p>
          <p className="mt-2">
            <Link href="#" className="hover:underline">Privacy Policy</Link> |
            <Link href="#" className="hover:underline"> Website Terms of Use</Link> |
            <Link href="#" className="hover:underline"> Master Services Agreement</Link> |
            <Link href="#" className="hover:underline"> Legal Archives</Link> |
            <Link href="#" className="hover:underline"> Sitemap</Link> |
            <Link href="#" className="hover:underline"> Cookie Settings</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
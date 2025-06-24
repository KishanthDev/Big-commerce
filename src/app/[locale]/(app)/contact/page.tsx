// components/ContactPage.tsx
import HeroSection from "@/components/contact/HeroSection";
import ContactPage from "@/components/contact/ContactPage";
import FAQSection from "@/components/contact/FAQSection";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="dark:bg-black bg-gray-100">
      <HeroSection />
      <ContactPage />
      <FAQSection />
      <Link
        className="inline-block p-3 bg-blue-400 cursor-pointer rounded-2xl"
        href="/html/chatview.html"
      >
        Chat
      </Link>
      <Link
        className="inline-block p-3 bg-blue-400 cursor-pointer rounded-2xl"
        href="/html/clientview.html"
      >
        client
      </Link>
    </div>
  );
};

export default Page;

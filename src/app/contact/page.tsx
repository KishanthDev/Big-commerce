// components/ContactPage.tsx
import HeroSection from "@/components/contact/HeroSection";
import ContactPage from "@/components/contact/ContactPage";
import FAQSection from "@/components/contact/FAQSection";
import React from "react";

const Page = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 leading-normal">
      <HeroSection />
      <ContactPage />
      <FAQSection />
    </div>
  );
};

export default Page;

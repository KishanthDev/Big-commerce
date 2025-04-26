// components/ContactPage.tsx
import HeroSection from "@/components/contact/HeroSection";
import ContactPage from "@/components/contact/ContactPage";
import FAQSection from "@/components/contact/FAQSection";
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactPage />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Page;

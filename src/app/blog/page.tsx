// components/BlogPage.tsx
import ContentSection from "@/components/blog/ContentSection";
import FeatureSection from "@/components/blog/FeatureSection";
import NewsLetter from "@/components/blog/NewsLetter";
import HeroSection from "@/components/blog/HeroSection";
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContentSection />
      <FeatureSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Page;

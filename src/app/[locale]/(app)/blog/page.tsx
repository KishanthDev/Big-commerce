// components/BlogPage.tsx
import ContentSection from "@/components/blog/ContentSection";
import FeatureSection from "@/components/blog/FeatureSection";
import NewsLetter from "@/components/blog/NewsLetter";
import HeroSection from "@/components/blog/HeroSection";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <FeatureSection />
      <NewsLetter />
    </div>
  );
};

export default Page;

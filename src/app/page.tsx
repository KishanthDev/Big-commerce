"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";
import Categories from "@/components/CategoryPage"; // make sure this is correct

const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const [showOnlyCategories, setShowOnlyCategories] = useState(false);

  const handleToggleCategory = () => {
    setShowOnlyCategories((prev) => !prev);
  };

  return (
    <>
      <Header
        onToggleCategory={handleToggleCategory}
        isCategoryOpen={showOnlyCategories}
      />

      {showOnlyCategories ? (
        <div>
          <Categories />
        </div>
      ) : (
        <>
          <HeroSection />
          <hr />
          <StatsSection />
          <BigCommerceBenefits />
          <Footer />
        </>
      )}
    </>
  );
}

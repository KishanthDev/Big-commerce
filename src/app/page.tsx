"use client";
import React from "react";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr />
      <StatsSection />
      <BigCommerceBenefits />
      <Footer />
    </>
  );
}

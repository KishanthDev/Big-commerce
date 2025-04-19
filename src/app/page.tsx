"use client";
import React from "react";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr />
      <StatsSection />
      <BigCommerceBenefits />
    </>
  );
}

"use client";
import React from "react";
import HeroSection from "@/components/hero/Hero";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";
import { CarouselDemo } from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <CarouselDemo />
      <HeroSection />
      <StatsSection />
      <BigCommerceBenefits />
    </>
  );
}

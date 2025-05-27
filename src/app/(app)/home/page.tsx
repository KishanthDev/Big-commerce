"use client";
import React from "react";
import HeroSection from "@/components/hero/Hero";
import StatsSection from "@/components/home/Stats";
import BigCommerceBenefits from "@/components/home/BigCommerceBenefits";
import { CarouselDemo } from "@/components/home/Carousel";

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

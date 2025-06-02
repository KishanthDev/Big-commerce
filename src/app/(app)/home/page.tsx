"use client";
import React from "react";
import HeroSection from "@/components/hero/Hero";
import StatsSection from "@/components/home/Stats";
import BigCommerceBenefits from "@/components/home/BigCommerceBenefits";
import { CarouselDemo } from "@/components/home/Carousel";
import ImageGridBox from "@/components/Image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <CarouselDemo />
        {/* Overlay ImageGridBox but let carousel buttons stay clickable */}
        <div className="absolute -bottom-650 inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <ImageGridBox />
          </div>
        </div>
      </div>

      <div className="h-500" />
      <HeroSection />
      <StatsSection />
      <BigCommerceBenefits />
    </>
  );
}

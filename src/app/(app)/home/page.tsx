"use client";
import React from "react";
import HeroSection from "@/components/hero/Hero";
import StatsSection from "@/components/home/Stats";
import BigCommerceBenefits from "@/components/home/BigCommerceBenefits";
import { CarouselDemo } from "@/components/home/Carousel";
import ImageGridBox from "@/components/Image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Carousel Section */}
      <section className="relative w-full">
        <CarouselDemo />
      </section>

      {/* Image Grid Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          <ImageGridBox />
        </div>
      </section>

      {/* Spacer */}
      <div className="h-8 sm:h-12 md:h-16 lg:h-20" />

      {/* Other Sections */}
      <section className="w-full">
        <HeroSection />
      </section>
      <section className="w-full">
        <StatsSection />
      </section>
      <section className="w-full">
        <BigCommerceBenefits />
      </section>
    </div>
  );
}
"use client";
import HeroSection from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";
import Footer from "@/components/footer/Footer";
import { CarouselDemo } from "@/components/Carousel";

export default function Home() {
 

  return (
    <>
      <Header />
      <HeroSection />

      <div className="relative w-full">
        <CarouselDemo />

        <div className="absolute -bottom-60 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 pointer-events-none">
          <div className="p-6 pointer-events-auto">
            <StatsSection />
          </div>
        </div>

      </div>

      <div className="h-40" />

      <BigCommerceBenefits />
      <Footer />

    </>

  );
}

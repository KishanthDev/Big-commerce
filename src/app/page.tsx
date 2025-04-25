"use client";
import React from "react";
import HeroSection from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <hr />
      <StatsSection />
      <BigCommerceBenefits />
      <Footer />
    </>
  );
}

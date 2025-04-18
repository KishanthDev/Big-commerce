"use client";
import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";

const Footer = dynamic(() => import("@/components/Footer"));

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

"use client";
import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";

const BusinessSolutions = dynamic(() => import("@/components/BusinessSolutions"));
const Business = dynamic(() => import("@/components/Business"));
const YourCompanySection = dynamic(() => import("@/components/CompanySection"));
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <p>Loading Services...</p>,
});
const Minzuno = dynamic(() => import("@/components/Minzuno"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <hr />
      <StatsSection />
      <BusinessSolutions />
      <Business />
      <YourCompanySection />
      <Services />
      <Minzuno />
      <Contact />
      <BigCommerceBenefits />
      <Footer />
    </>
  );
}

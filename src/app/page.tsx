"use client";
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import dynamic from "next/dynamic";

const BusinessSolutions = dynamic(() => import("@/components/BusinessSolutions"), { ssr: false });
const Business = dynamic(() => import("@/components/Business"), { ssr: false });
const YourCompanySection = dynamic(() => import("@/components/CompanySection"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Minzuno = dynamic(() => import("@/components/Minzuno"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
      <Footer />
    </>
  );
}
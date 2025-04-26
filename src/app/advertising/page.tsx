import AdOptions from "@/components/advertising/AdOptions";
import CTA from "@/components/advertising/Cta";
import Hero from "@/components/advertising/Hero";
import HowItWorks from "@/components/advertising/HowItWorks";
import ResultsSection from "@/components/advertising/ResultsSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <AdOptions />
      <HowItWorks />
      <ResultsSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;

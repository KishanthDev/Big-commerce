import Business from "@/components/Business";
import BusinessSolutions from "@/components/BusinessSolutions";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <hr/>
    <BusinessSolutions/>
    <Business/>
    <Footer/>
    </>
  );
}
import Business from "@/components/Business";
import BusinessSolutions from "@/components/BusinessSolutions";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Minzuno from "@/components/Minzuno";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <hr/>
    <BusinessSolutions/>
    <Business/>
    <Services/>
    <Minzuno/>
    <Contact/>
    <Footer/>
    </>
  );
}
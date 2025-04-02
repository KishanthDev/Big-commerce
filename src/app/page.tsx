import Business from "@/components/Business";
import BusinessSolutions from "@/components/BusinessSolutions";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Minzuno from "@/components/Minzuno";
import Contact from "@/components/Contact";
import StatsSection from "@/components/Stats";
import YourCompanySection from "@/components/CompanySection";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <hr/>
    <StatsSection/>
    <BusinessSolutions/>
    <Business/>
    <YourCompanySection/>
    <Services/>
    <Minzuno/>
    <Contact/>
    <Footer/>
    </>
  );
}
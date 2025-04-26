import Hero from "../../components/seller/Hero";
import WhySell from "../../components/seller/WhySell";
import HowItWorks from "../../components/seller/HowItWorks";
import CtaSection from "../../components/seller/CtaSection";
import Footer from "../../components/footer/Footer";
import Header from "@/components/header/Header";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <WhySell />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

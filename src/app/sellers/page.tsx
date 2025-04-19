import Hero from "../../components/seller/Hero";
import WhySell from "../../components/seller/WhySell";
import HowItWorks from "../../components/seller/HowItWorks";
import CtaSection from "../../components/seller/CtaSection";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <div className="font-sans text-gray-900">
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

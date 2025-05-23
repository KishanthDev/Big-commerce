import Hero from "@/components/seller/Hero";
import WhySell from "@/components/seller/WhySell";
import HowItWorks from "@/components/seller/HowItWorks";
import CtaSection from "@/components/seller/CtaSection";

export default function Page() {
  return (
    <div>
      <main>
        <Hero />
        <WhySell />
        <HowItWorks />
        <CtaSection />
      </main>
    </div>
  );
}

import Hero from "../../components/buyer/Hero";
import WhyShop from "../../components/buyer/WhyShop";
import HowItWorks from "../../components/buyer/HowItWorks";
import FeaturedStores from "../../components/buyer/FeaturedStores";
import CtaSection from "../../components/buyer/CtaSection";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <div className="font-sans text-gray-900">
      <main>
        <Hero />
        <WhyShop />
        <HowItWorks />
        <FeaturedStores />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

import Hero from "../../components/buyer/Hero";
import WhyShop from "../../components/buyer/WhyShop";
import HowItWorks from "../../components/buyer/HowItWorks";
import FeaturedStores from "../../components/buyer/FeaturedStores";
import CtaSection from "../../components/buyer/CtaSection";
import Footer from "../../components/footer/Footer";
import Header from "@/components/header/Header";

export default function Page() {
  return (
    <div>
      <Header />
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

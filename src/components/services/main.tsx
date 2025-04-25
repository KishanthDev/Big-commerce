import data from "../../../data/data.json";
import { Navbar } from "./navbar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CertificationsSection from "./CertificationsSection";
import ReviewsSection from "./ReviewsSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";
import BusinessHoursSection from "./BusinessHoursSection";
import AdditionalInfoSection from "./AdditionalInfoSection";

const { businessHours, certifications, images, reviews, services } = data;

export default function Main() {
  return (
    <>
    <Navbar />
    <div className="font-sans text-[#333] leading-relaxed">
      <HeroSection />
      <main className="max-w-6xl mx-auto p-4 md:p-6 grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2 space-y-10 md:space-y-12">
          <ServicesSection services={services} />
          <CertificationsSection certifications={certifications} />
          <ReviewsSection reviews={reviews} />
          <GallerySection images={images} />
        </div>
        <div className="space-y-10 md:space-y-12">
          <ContactSection />
          <BusinessHoursSection businessHours={businessHours} />
          <AdditionalInfoSection />
        </div>
      </main>
    </div>
    </>
  );
}
import businessesData from "@data/detailed_categories_with_subcategories.json";
import { Navbar } from "@components/services/navbar";
import HeroSection from "@components/services/HeroSection";
import ServicesSection from "@components/services/ServicesSection";
import CertificationsSection from "@components/services/CertificationsSection";
import ReviewsSection from "@components/services/ReviewsSection";
import GallerySection from "@components/services/GallerySection";
import ContactSection from "@components/services/ContactSection";
import BusinessHoursSection from "@components/services/BusinessHoursSection";
import AdditionalInfoSection from "@components/services/AdditionalInfoSection";
import data from "@data/data.json";
import { notFound } from "next/navigation";
import { slugify } from "@lib/slugify";
import Footer from "@/components/services/Footer";
import { Business } from "types/business";


interface Subcategory {
  name: string;
  businesses: Business[];
}

interface Category {
  category: string;
  subcategories: Subcategory[];
}

const typedBusinessesData = businessesData as unknown as Category[];

type Props = {
  params: Promise<{
    categorySlug: string;
    subcategorySlug: string;
    businessSlug: string;
  }>;
};

export async function generateStaticParams() {
  const params = typedBusinessesData
    .flatMap((cat) =>
      cat.subcategories.flatMap((sub) =>
        sub.businesses.map((b) => ({
          categorySlug: slugify(cat.category),
          subcategorySlug: slugify(sub.name),
          businessSlug: slugify(b.businessName),
        }))
      )
    );

  return params;
}

export default async function BusinessPage({ params }: Props) {
  const { categorySlug, businessSlug } = await params;

  const category = typedBusinessesData.find(
    (cat) => slugify(cat.category) === categorySlug
  );

  if (!category) {
    notFound();
  }

  const business = category
    .subcategories.flatMap((sub) => sub.businesses)
    .find((b) => slugify(b.businessName) === businessSlug);

  if (!business) {
    notFound();
  }

  const { businessHours, certifications, images } = data;

  return (
    <>
      <Navbar businessName={category.category} />
      <div className="font-sans text-[#333] leading-relaxed">
        <HeroSection title={business.businessName} description={business.description} />
        <main className="max-w-6xl mx-auto p-4 md:p-6 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-10 md:space-y-12">
            <ServicesSection services={business.services} />
            <CertificationsSection certifications={certifications} />
            <ReviewsSection reviews={business.reviews} />
            <GallerySection images={images} />
          </div>
          <div className="space-y-10 md:space-y-12">
            <ContactSection
              address={business.location.address}
              city={business.location.city}
              state={business.location.state}
              postalCode={business.location.postalCode}
              phone={business.contact.phone}
              email={business.contact.email}
              website={business.contact.website} />
            <BusinessHoursSection businessHours={businessHours} />
            <AdditionalInfoSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
"use client";

import { useEffect, use } from "react";
import { slugify } from "@/app/lib/slugify";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { FiltersBar } from "@/components/filter/FiltersBar";
import { Globe, Heart, MapPin, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import StarRating from "@/components/icons/StarRating";
import Link from "next/link";
import { Category, Subcategory } from "@/types/cat";

interface CategoryPageProps {
  params: Promise<{ subcategorySlug: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categories, fetchCategories, loading } = useCategoryStore();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const resolvedParams = use(params);
  const slug = slugify(resolvedParams.subcategorySlug);

  // Find the subcategory and its parent category
  let subcategory: Subcategory | null = null;
  let parentCategory: Category | null = null;

  for (const category of categories) {
    if (category.subcategories) {
      const foundSub = category.subcategories.find(
        (sub: Subcategory) =>
          slugify(
            String(
              typeof sub === "string" ? sub : sub.subcategoryName || sub.name,
            ),
          ) === slug,
      );
      if (foundSub) {
        subcategory = foundSub;
        parentCategory = category;
        break;
      }
    }
  }

  // Get subcategory name for display and business data
  const subcategoryName =
    typeof subcategory === "string"
      ? subcategory
      : subcategory?.subcategoryName || subcategory?.name || "Unknown";
  const subPic =
    typeof subcategory === "string"
      ? subcategory
      : subcategory?.imageUrl || "https://via.placeholder.com/300";

  // Temporary business data - replace with actual business data
  const businesses = [
    {
      id: 1,
      businessName: subcategoryName, // Use resolved subcategoryName
      description: `Best ${String(subcategoryName).toLowerCase()} services in town.`,
      ratings: 4.5,
      reviews: [{}, {}, {}, {}, {}],
      highlights: [
        "Free Estimates",
        "Certified Technicians",
        "Same-Day Service",
      ],
      gallery: [
        typeof subPic === "string" ? subPic : "https://via.placeholder.com/300",
      ],
      contact: {
        phone: "123-456-7890",
        website: "https://mikesauto.com",
      },
      cta: {
        getDirections: "https://maps.google.com/?q=Mike's+Auto+Garage",
      },
    },
  ];

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!subcategory || !parentCategory) {
    return <div className="p-6">Subcategory not found</div>;
  }

  return (
    <div className="h-full p-5 bg-gray-100 dark:bg-black">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {String(subcategoryName)} Businesses in {parentCategory.categoryName}
      </h1>
      <FiltersBar />
      {businesses.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No businesses found for this subcategory.
        </p>
      ) : (
        <div className="space-y-6">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Top-right floating buttons */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button
                  aria-label="Share"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  aria-label="Like"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Left: Image */}
              <div className="sm:w-1/3 w-full h-56 sm:h-auto relative">
                <Image
                  src={business.gallery[0]}
                  alt={String(business.businessName)}
                  className="object-cover w-full h-full"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              {/* Right: Details */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {String(business.businessName)}
                  </h2>
                  <div className="flex items-center gap-2">
                    <StarRating rating={business.ratings} />
                    <span className="text-gray-800 dark:text-gray-300 text-sm">
                      ({business.reviews.length})
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {business.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {business.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-sm px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-end mt-6 flex-wrap gap-4">
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <a
                      href={`tel:${business.contact.phone}`}
                      aria-label="Call"
                      className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {business.contact.phone}
                    </a>
                    <a
                      href={business.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                      className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      {business.contact.website}
                    </a>
                    <a
                      href={business.cta.getDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Directions"
                      className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Directions
                    </a>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"#"}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

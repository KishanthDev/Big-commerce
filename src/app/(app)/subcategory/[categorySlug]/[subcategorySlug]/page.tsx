"use client";

import { use, useEffect, useState } from "react";
import { slugify } from "@/app/lib/slugify";
import { useCategoryStore } from "@/stores/useCategoryStore";
import FilterBar from "@/components/filter/FiltersBar";
import { Heart, MapPin, Phone, Share2 } from "lucide-react";
import StarRating from "@/components/icons/StarRating";
import Link from "next/link";
import { Category, Subcategory } from "@/types/cat";
import Breadcrumb from "@/components/breadcrumb/Breadcrumbs";
import CategoryImageSlider from "./CategoryImageSlider";
import Pagination from "@/components/ui/Pagination";

interface CategoryPageProps {
  params: Promise<{ subcategorySlug: string }>;
}

interface Business {
  id: string;
  name: string;
  rating: number;
  totalRatings: number;
  address: string;
  phone: string;
  tags: string[];
  hasWhatsApp: boolean;
  hasEnquiry: boolean;
  isTrusted: boolean;
  isVerified: boolean;
  isPopular: boolean;
  category: string;
  subcategory?: string;
  pincode: string;
  city?: string;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { categories, fetchCategories, loading: loadingCategories } = useCategoryStore();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loadingBusinesses, setLoadingBusinesses] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const resolvedParams = use(params);
  const slug = slugify(resolvedParams.subcategorySlug);

  let subcategory: Subcategory | null = null;
  let parentCategory: Category | null = null;

  for (const category of categories) {
    if (category.subcategories) {
      const foundSub = category.subcategories.find(
        (sub: Subcategory) =>
          slugify(
            String(typeof sub === "string" ? sub : sub.subcategoryName || sub.name)
          ) === slug
      );
      if (foundSub) {
        subcategory = foundSub;
        parentCategory = category;
        break;
      }
    }
  }

  const subcategoryName =
    typeof subcategory === "string"
      ? subcategory
      : subcategory?.subcategoryName || subcategory?.name || "Unknown";

  const categoryName = parentCategory?.categoryName;

  useEffect(() => {
    const fetchBusinesses = async () => {
      if (!categoryName || !subcategoryName) return;

      try {
        setLoadingBusinesses(true);
        const res = await fetch(
          `/api/search-list/business-search?pincode=573201&category=${encodeURIComponent(
            categoryName
          )}&subcategory=${encodeURIComponent(
            String(subcategoryName)
          )}&limit=${itemsPerPage}&page=${currentPage}`
        );

        const data = await res.json();
        if (data.success) {
          setBusinesses(data.data.businesses || []);
          setTotalItems(data.data.totalCount || 0);
        }
        else {
          setError(data.error || "Failed to fetch businesses.");
        }
      } catch (err) {
        setError("Something went wrong while fetching business data." + (err ? ` (${String(err)})` : ""));
      } finally {
        setLoadingBusinesses(false);
      }
    };

    fetchBusinesses();
  }, [categoryName, subcategoryName,currentPage]);

  if (loadingCategories || loadingBusinesses) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  if (!subcategory || !parentCategory) {
    return <div className="p-6">Subcategory not found</div>;
  }

  return (
    <div className="h-full p-5 bg-gray-100 dark:bg-black">
      <div className="mt-18 mb-3">
        <Breadcrumb />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {String(subcategoryName)} Businesses in {categoryName}
        </h1>
      </div>
      <FilterBar />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : businesses.length === 0 ? (
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
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button aria-label="Share" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button aria-label="Like" className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <CategoryImageSlider categoryName={categoryName ?? ""} altText={business.name} />

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {business.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <StarRating rating={business.rating} />
                    <span className="text-gray-800 dark:text-gray-300 text-sm">
                      ({business.totalRatings})
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">{business.address}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {business.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-sm px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-end mt-6 flex-wrap gap-4">
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <a href={`tel:${business.phone}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      {business.phone}
                    </a>
                    {business.city && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          business.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        {business.city}
                      </a>
                    )}
                    <Link
                      href="#"
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
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

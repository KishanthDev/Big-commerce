"use client";

import { use, useEffect, useState } from "react";
import { slugify } from "@/app/lib/slugify";
import { useCategoryStore } from "@/stores/useCategoryStore";
import FilterBar from "@/components/filter/FiltersBar";
import { Category, Subcategory } from "@/types/cat";
import Breadcrumb from "@/components/breadcrumb/Breadcrumbs";
import CategoryImageSlider from "./CategoryImageSlider";
import Pagination from "@/components/ui/Pagination";
import CategoryPageSkeleton from "@/components/ui/SkeletonCard";
import ListingCard from "@/components/category/ListingCard";


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
  }, [categoryName, subcategoryName, currentPage]);


  if (loadingCategories || loadingBusinesses) {
    return <CategoryPageSkeleton />;
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
            <ListingCard
              key={business.id}
              id={business.id}
              title={business.name}
              rating={business.rating}
              ratingCount={business.totalRatings}
              address={business.address}
              city={business.city}
              phone={business.phone}
              tags={business.tags}
              imageComponent={
                <CategoryImageSlider
                  categoryName={business.category ?? ""}
                  altText={business.category}
                />
              } visitLink="#"
              mapLink={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
            />
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

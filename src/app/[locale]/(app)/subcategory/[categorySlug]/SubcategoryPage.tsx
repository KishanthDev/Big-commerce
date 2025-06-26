"use client";

import { useState, useEffect } from "react";
import { ElementType } from "react";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { slugify } from "@/app/lib/slugify";
import { subCategoryIconMap } from "@/components/icons/subCategoryIconMap";
import type { Category } from "@/types/cat";
import FilterBar from "@/components/filter/FiltersBar";
import Breadcrumb from "@/components/breadcrumb/Breadcrumbs";
import ListingCard from "@/components/category/ListingCard";

interface SubcategoryPageProps {
  categorySlug: string;
  initialCategory: Category;
  locale?: string; // Add locale prop
}

export const findCategoryBySlug = (
  categories: Category[],
  slug: string,
): Category | undefined => {
  return categories.find((category) => slugify(category.categoryName) === slug);
};

export default function SubcategoryPage({
  categorySlug,
  initialCategory,
  locale = "en", // Default to "en" if not provided
}: SubcategoryPageProps) {
  const [currentCategory, setCurrentCategory] = useState(initialCategory);
  const { categories, loading, fetchCategories } = useCategoryStore();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);

  useEffect(() => {
    if (categories.length > 0) {
      const foundCategory = findCategoryBySlug(categories, categorySlug);
      if (foundCategory) {
        setCurrentCategory(foundCategory);
      }
    }
  }, [categories, categorySlug]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!currentCategory) return <div className="p-6">Category not found</div>;

  return (
    <div className="h-full p-5 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <div className="mt-18 mb-3">
        <Breadcrumb />
        <h1 className="text-2xl font-bold">Explore {currentCategory.categoryName} Subcategories</h1>
      </div>
      <FilterBar />
      {currentCategory.subcategories &&
        currentCategory.subcategories.length > 0 ? (
        <div className="space-y-6">
          {currentCategory.subcategories.map((sub, idx) => {
            const subName = typeof sub === "string" ? sub : sub.subcategoryName;
            const subPic =
              typeof sub === "string"
                ? sub
                : sub.imageUrl || "https://res.cloudinary.com/ds6mdqjnx/image/upload/v1748946852/sampleimage_qgrwbl.jpg";
            const subSlug = slugify(subName);
            const IconComponent: ElementType | undefined =
              subCategoryIconMap[subName];

            // Dummy business-style data
            const business = {
              id: idx,
              businessName: subName,
              description: `Best ${subName.toLowerCase()} services in town.`,
              ratings: 4.2,
              reviews: [{}, {}, {}, {}, {}],
              highlights: ["Affordable", "Expert Staff", "Quick Service"],
              gallery: [
                typeof subPic === "string"
                  ? subPic
                  : "https://res.cloudinary.com/ds6mdqjnx/image/upload/v1748946852/sampleimage_qgrwbl.jpg",
              ],
              contact: {
                phone: "123-456-7890",
              },
              cta: {
                getDirections: "#",
              },
            };

            return (
              <ListingCard
                key={idx}
                id={idx}
                title={subName}
                rating={business.ratings}
                ratingCount={business.reviews.length}
                description={business.description}
                phone={business.contact.phone}
                tags={business.highlights}
                imageUrl={business.gallery[0]}
                icon={IconComponent ? <IconComponent className="w-5 h-5 text-blue-500" /> : undefined}
                visitLink={`/${locale}/subcategory/${categorySlug}/${subSlug}`} // Fixed: Include locale
              />
            );
          })}
        </div>
      ) : (
        <p>No subcategories found</p>
      )}
    </div>
  );
}
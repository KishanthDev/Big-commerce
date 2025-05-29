"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Share2, Heart } from "lucide-react";
import { ElementType } from "react";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { slugify } from "@/app/lib/slugify";
import { subCategoryIconMap } from "@/components/icons/subCategoryIconMap";
import StarRating from "@/components/icons/StarRating";
import type { Category } from "@/types/cat";
import { FiltersBar } from "@/components/filter/FiltersBar";

interface SubcategoryPageProps {
  categorySlug: string;
  initialCategory: Category;
}

export const findCategoryBySlug = (
  categories: Category[],
  slug: string
): Category | undefined => {
  return categories.find((category) => slugify(category.categoryName) === slug);
};

export default function SubcategoryPage({
  categorySlug,
  initialCategory,
}: SubcategoryPageProps) {
  const [currentCategory, setCurrentCategory] = useState(initialCategory);
  const { categories, loading, error, fetchCategories } = useCategoryStore();

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
  if (error) return <div className="p-6">Error: {error}</div>;
  if (!currentCategory) return <div className="p-6">Category not found</div>;

  return (
    <div className="h-full p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">
        Explore {currentCategory.categoryName} Subcategories
      </h1>
      <FiltersBar/>
      {currentCategory.subcategories && currentCategory.subcategories.length > 0 ? (
        <div className="space-y-6">
          {currentCategory.subcategories.map((sub, idx) => {
            const subName = typeof sub === "string" ? sub : sub.subcategoryName;
            const subPic = typeof sub === "string" ? sub : (sub.imageUrl || 'https://via.placeholder.com/300');
            const subSlug = slugify(subName);
            const IconComponent: ElementType | undefined = subCategoryIconMap[subName];

            // Dummy business-style data
            const business = {
              id: idx,
              businessName: subName,
              description: `Best ${subName.toLowerCase()} services in town.`,
              ratings: 4.2,
              reviews: [{}, {}, {}, {}, {}],
              highlights: ["Affordable", "Expert Staff", "Quick Service"],
              gallery: [typeof subPic === "string" ? subPic : 'https://via.placeholder.com/300'],
              contact: {
                phone: "123-456-7890",
              },
              cta: {
                getDirections: "#",
              },
            };

            return (
              
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button aria-label="Share" className="text-gray-500 hover:text-blue-600">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button aria-label="Like" className="text-gray-500 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="sm:w-1/3 w-full h-56 sm:h-auto relative">
                  <Image
                    src={business.gallery[0]}
                    alt={subName}
                    className="object-cover w-full h-full"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/subcategory/${categorySlug}/${subSlug}`}
                      className="text-2xl font-bold hover:underline flex gap-2 items-center"
                    >
                      {IconComponent && <IconComponent className="w-5 h-5 text-blue-500" />}
                      {subName}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={business.ratings} />
                      <span className="text-sm text-gray-500">
                        ({business.reviews.length})
                      </span>
                    </div>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {business.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {business.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-sm px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <a
                      href={`tel:${business.contact.phone}`}
                      className="flex items-center gap-1 hover:text-blue-600"
                    >
                      <Phone className="w-4 h-4" />
                      {business.contact.phone}
                    </a>
                    <Link
                      href={`/subcategory/${categorySlug}/${subSlug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Listings →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No subcategories found</p>
      )}
    </div>
  );
}

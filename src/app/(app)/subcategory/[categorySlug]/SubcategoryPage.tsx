"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GridIcon, ListIcon } from "lucide-react";
import { ElementType } from "react";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { slugify } from "@/app/lib/slugify";
import { subCategoryIconMap } from "@/components/icons/subCategoryIconMap";
import type { Category } from "@/types/cat";

interface SubcategoryPageProps {
  categorySlug: string;
  initialCategory: Category;
}

export const findCategoryBySlug = (categories: Category[], slug: string): Category | undefined => {
  return categories.find(category => slugify(category.categoryName) === slug);
};

export default function SubcategoryPage({ 
  categorySlug,
  initialCategory
}: SubcategoryPageProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentCategory) return <div>Category not found</div>;

  return (
    <div className="h-[calc(100vh-110px)] overflow-auto bg-white p-6 text-gray-900 dark:bg-black dark:text-white">

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">{currentCategory.categoryName}</h1>

        <div className="flex gap-2">
          <GridIcon
            className={`cursor-pointer ${
              viewMode === "grid" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setViewMode("grid")}
          />
          <ListIcon
            className={`cursor-pointer ${
              viewMode === "list" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setViewMode("list")}
          />
        </div>
      </div>

      <h2 className="mb-4 font-medium">Subcategories</h2>

      {currentCategory.subcategories ? (
        <ul
          className={`gap-6 ${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              : "flex flex-col"
          }`}
        >
          {currentCategory.subcategories.map((sub, idx) => {
            const subName = typeof sub === "string" ? sub : sub.subcategoryName;
            const IconComponent: ElementType | undefined =
              subCategoryIconMap[subName];

            return (
              <li
                key={idx}
                className="rounded-lg border border-gray-400 bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent p-6 transition-all hover:shadow-md"
              >
                <Link
                  className="block"
                  href={`/subcategory/${categorySlug}/${slugify(subName)}`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-blue-500" />
                    )}
                    <span>{subName}</span>
                  </div>
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    Browse local {subName} businesses
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No subcategories found</p>
      )}
    </div>
  );
}
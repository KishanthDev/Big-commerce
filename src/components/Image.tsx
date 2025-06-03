"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { slugify } from "@/app/lib/slugify";
import { Category, Subcategory } from "@/types/cat";

export default function ImageGridBox() {
  const { categories, loading, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading)
    return <div className="text-center py-8">Loading categories...</div>;
  if (!categories.length)
    return <div className="text-center py-8">No categories found</div>;

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category: Category) => (
          <div
            key={category.id}
            className="rounded-lg border-2 border-gray-200 bg-white p-4 shadow-sm flex flex-col"
          >
            <h3 className="text-lg font-bold text-center mb-4">
              {category.categoryName}
            </h3>

            {/* Images grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {category.subcategories?.slice(0, 4).map((subcategory: Subcategory, index: number) => {
                const subName =
                  typeof subcategory === "string"
                    ? subcategory
                    : subcategory.subcategoryName ||
                      subcategory.name ||
                      "Unknown";
                const subpic =
                  typeof subcategory === "string"
                    ? subcategory
                    : subcategory.imageUrl ||
                      "https://res.cloudinary.com/ds6mdqjnx/image/upload/v1748946852/sampleimage_qgrwbl.jpg";

                const subKey =
                  typeof subcategory === "string"
                    ? `${category.id}-${index}`
                    : subcategory.id || `${category.id}-${index}`;

                return (
                  <div key={subKey} className="space-y-2">
                    {/* Image box */}
                    <div className="w-full aspect-square relative rounded-md overflow-hidden border border-gray-200">
                      <Image
                        src={String(subpic)}
                        alt={String(subName)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Subcategory name below image */}
                    <p className="text-sm font-medium text-center">
                      {String(subName)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Load More button at the bottom of each card */}
            <div className="mt-auto pt-2">
              <Link
                href={`/subcategory/${slugify(String(category.categoryName))}`}
                className="block text-blue-500 hover:underline duration-200"
              >
                Load More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

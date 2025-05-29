"use client";

import { useRouter, usePathname } from "next/navigation";
import { slugify } from "@/app/lib/slugify";
import React, { useState, useEffect } from "react";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { categoryIconMap } from "@/components/icons/IconMap";
import { subCategoryIconMap } from "@/components/icons/subCategoryIconMap";
import { useSidebarStore } from "@/stores/useSidebarStore";

export default function Sidebar() {
  const { isOpen } = useSidebarStore();
  const { categories, fetchCategories, loading } = useCategoryStore();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const currentSlug = pathname?.split("/subcat/")[1];

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  // Automatically open parent category if a subcategory is active
  useEffect(() => {
    for (const cat of categories) {
      if (
        cat.subcategories?.some(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (sub: any) => slugify(sub.subcategoryName) === currentSlug
        )
      ) {
        setOpenCategory(Number(cat.id));
        break;
      }
    }
  }, [categories, currentSlug]);

  if (!isOpen) return null;
  if (loading) return <div className="p-6">Loading...</div>;

  const toggleCategory = (categoryId: number) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const sortedCategories = [...categories].sort((a, b) =>
    String(a.categoryName).localeCompare(String(b.categoryName))
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sortSubcategories = (subcategories: any[]) =>
    [...subcategories].sort((a, b) =>
      String(a.subcategoryName).localeCompare(String(b.subcategoryName))
    );

  return (
    <div className="relative w-70 bg-white dark:bg-gray-800 pl-6 pr-6 shadow-lg h-full overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold sticky top-0 z-10 bg-white dark:bg-gray-800 py-4">
        Categories
      </h2>

      <div>
        {sortedCategories.map((cat) => {
          const isCategoryOpen = openCategory === Number(cat.id);
          const sortedSubcategories = cat.subcategories
            ? sortSubcategories(cat.subcategories)
            : [];

          return (
            <div key={cat.id} className="mb-2">
              <a
                href="#"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  toggleCategory(Number(cat.id));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCategory(Number(cat.id));
                  }
                }}
                aria-expanded={isCategoryOpen}
                aria-controls={`subcategory-list-${cat.id}`}
                className="flex justify-between items-center cursor-pointer font-normal h-[70px] px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-2">
                  {(() => {
                    const name = String(cat.categoryName).trim();
                    const Icon = categoryIconMap[name];
                    return (
                      <>
                        {Icon && <Icon className="h-5 w-5 text-blue-500 shrink-0" />}
                        {name}
                      </>
                    );
                  })()}
                </span>
                {sortedSubcategories.length > 0 && (
                  <span>
                    {isCategoryOpen ? (
                      <ChevronDownIcon className="h-5 w-5" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5" />
                    )}
                  </span>
                )}
              </a>

              {isCategoryOpen && sortedSubcategories.length > 0 && (
                <div
                  id={`subcategory-list-${cat.id}`}
                  className="pl-6 mt-2 space-y-1"
                >
                  {sortedSubcategories.map((sub) => {
                    const name = String(sub.subcategoryName).trim();
                    const subCategorySlug = slugify(name);
                    const isActive = currentSlug === subCategorySlug;

                    return (
                      <a
                        key={sub.id}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm cursor-pointer transition-colors ${isActive
                          ? "bg-gray-300 text-blue-700 dark:text-blue-400 dark:bg-gray-700 font-medium"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/subcategory/${slugify(String(cat.categoryName))}/${subCategorySlug}`);
                        }}
                      >
                        {(() => {
                          const Icon = subCategoryIconMap[name];
                          return (
                            <>
                              {Icon && (
                                <Icon
                                  className={`h-4 w-4 shrink-0 ${isActive ? "text-blue-600" : "text-blue-500"
                                    }`}
                                />
                              )}
                              <span>{name}</span>
                            </>
                          );
                        })()}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
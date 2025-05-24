// components/Sidebar.tsx
"use client";
import { useRouter } from "next/navigation";
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

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  if (!isOpen) return null;
  if (loading) return <div className="p-6">Loading...</div>;

  const toggleCategory = (categoryId: number) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="relative w-70 bg-white dark:bg-gray-800 p-6 shadow-lg h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>

      <div>
        {categories.map((cat) => {
          const isOpen = openCategory === Number(cat.id);
          return (
            <div key={cat.id} className="mb-4">
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
                aria-expanded={isOpen}
                aria-controls={`subcategory-list-${cat.id}`}
                className="flex justify-between items-center cursor-pointer font-semibold px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
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
                {cat.subcategories && cat.subcategories.length > 0 && (
                  <span>
                    {isOpen ? (
                      <ChevronDownIcon className="h-5 w-5" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5" />
                    )}
                  </span>
                )}
              </a>
              {isOpen &&
                cat.subcategories &&
                cat.subcategories.length > 0 && (
                  <div
                    id={`subcategory-list-${cat.id}`}
                    className="pl-6 mt-2 space-y-1"
                  >
                    {cat.subcategories.map((sub) => (
                      <a
                        key={sub.id}
                        className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/subcat/${slugify(String(sub.subcategoryName))}`);
                        }}
                      >
                        {(() => {
                          const name = String(sub.subcategoryName).trim();
                          const Icon = subCategoryIconMap[name];
                          return (
                            <>
                              {Icon && <Icon className="h-4 w-4 text-blue-500 shrink-0" />}
                              <span>{name}</span>
                            </>
                          );
                        })()}
                      </a>
                    ))}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

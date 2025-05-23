// components/Sidebar.tsx
"use client";
import { useRouter } from "next/navigation";
import { slugify } from "@/app/lib/slugify";
import React, { useState, useEffect } from "react";
import { useCategoryStore } from "./stores/useCategoryStore";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { categories, fetchCategories, loading } = useCategoryStore();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  if (!isOpen) return null;
  if (loading) return <div className="p-6">Loading</div>;

  const toggleCategory = (categoryId: number) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div
      className={`relative w-70 bg-white dark:bg-gray-800 p-6 overflow-y-auto shadow-lg transition-all duration-300 md:block ${isOpen ? "block" : "hidden"
        }`}
    >

      <button
        className="absolute top-4 right-4 p-2 rounded bg-gray-200 hover:bg-gray-300 md:hidden"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        Close
      </button>

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
                <span>{String(cat.categoryName)}</span>
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
                        className="block px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(
                            `/subcat/${slugify(String(sub.subcategoryName))}`,
                          );
                          onClose();
                        }}
                      >
                        {String(sub.subcategoryName)}
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
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { categoryIconMap } from "@/components/icons/IconMap";
import { useSidebarStore } from "@/stores/useSidebarStore";

export default function CategoryCarousel() {
  const { toggleSidebar, closeSidebar } = useSidebarStore();
  const { categories, fetchCategories, loading } = useCategoryStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const handleCategoryClick = (index: number) => {
    const clickedCategory = displayCategories[index];

    if (clickedCategory.categoryName === "All") {
      toggleSidebar();
    } else {
      closeSidebar();
      setActiveIndex(index);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  // Sort categories alphabetically (case-insensitive)
  const sortedCategories = [...categories].sort((a, b) => {
    const nameA = String(a.categoryName).toLowerCase();
    const nameB = String(b.categoryName).toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Manually insert "All" category at the beginning
  const allCategory = { categoryName: "All" };
  const displayCategories = [allCategory, ...sortedCategories];

  return (
    <div className="relative w-full pt-4">
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="overflow-x-auto custom-scrollbar scroll-smooth cursor-grab"
        >
          <motion.div
            animate={controls}
            className="flex gap-3 px-2"
            style={{ width: "max-content" }}
          >
            {displayCategories.map((category, index) => {
              const name = String(category.categoryName).trim();
              const Icon = categoryIconMap[name];

              return (
                <div
                  key={`${name}-${index}`}
                  className="relative flex font-normal text-xs items-center gap-2 px-2 py-3 flex-shrink-0 cursor-pointer select-none"
                  onClick={() => handleCategoryClick(index)}
                >
                  {Icon && (
                    <Icon
                      className={`h-5 w-5 ${
                        activeIndex === index ? "text-purple-600" : "text-primary"
                      } shrink-0`}
                    />
                  )}
                  <span
                    className={`text-primary font-medium ${
                      activeIndex === index ? "text-purple-600" : "text-gray-600"
                    }`}
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
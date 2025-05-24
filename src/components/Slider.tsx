"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useCategoryStore } from "./stores/useCategoryStore";
import { categoryIconMap } from "@/components/icons/IconMap";


interface CategoryCarouselProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function CategoryCarousel({ setSidebarOpen, sidebarOpen }: CategoryCarouselProps) {
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
      setSidebarOpen(!sidebarOpen);
      sidebarOpen? setActiveIndex(null):setActiveIndex(index)
    } else {
      setSidebarOpen(false);
      setActiveIndex(index);
    }
  };


  if (loading) return <div className="p-6">Loading...</div>;

  // Manually insert "All" category at the beginning
  const allCategory = { categoryName: "All" };
  const displayCategories = [allCategory, ...categories];

  return (
    <div className="relative w-full pt-4">
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-thin scroll-smooth cursor-grab"
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
                  className="relative flex items-center gap-2 px-2 py-3 flex-shrink-0 cursor-pointer select-none"
                  onClick={() => handleCategoryClick(index)}
                >
                  {Icon && (
                    <Icon className={`h-5 w-5 ${activeIndex === index ? "text-purple-600" : "text-gray-600"
                      } shrink-0`} />
                  )}
                  <span
                    className={`text-sm font-medium ${activeIndex === index ? "text-purple-600" : "text-gray-600"
                      }`}
                  >
                    {name}
                  </span>
                  <div
                    className={`absolute bottom-0 h-[3px] w-full bg-purple-600 rounded-t-md transition-opacity duration-300 ${activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                  />
                </div>
              );
            })}

          </motion.div>
        </div>
      </div>
    </div>
  );
}

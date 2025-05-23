"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useCategoryStore } from "./stores/useCategoryStore";
import { categoryIconMap } from "@/components/icons/IconMap";


const ITEM_WIDTH = 140;

interface CategoryCarouselProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function CategoryCarousel({ setSidebarOpen, sidebarOpen }: CategoryCarouselProps) {
  const { categories, fetchCategories, loading } = useCategoryStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showButtons, setShowButtons] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -ITEM_WIDTH * 2, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: ITEM_WIDTH * 2, behavior: "smooth" });
    }
  };

  const handleCategoryClick = (index: number) => {
    const clickedCategory = displayCategories[index];

    if (clickedCategory.categoryName === "All") {
      setSidebarOpen(!sidebarOpen);
      setActiveIndex(null);
    } else {
      setSidebarOpen(false);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setShowButtons(scrollWidth > clientWidth && window.innerWidth >= 768);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  // Manually insert "All" category at the beginning
  const allCategory = { categoryName: "All" };
  const displayCategories = [allCategory, ...categories];

  return (
    <div className="relative w-full pt-4">
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth cursor-grab"
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
                    <Icon className="h-4 w-4 text-blue-500 shrink-0" />
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

        {showButtons && (
          <>
            <button
              onClick={scrollLeft}
              className="scroll-buttons absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white p-2 shadow-lg z-10"
              aria-label="Scroll Left"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="scroll-buttons absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white p-2 shadow-lg z-10"
              aria-label="Scroll Right"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

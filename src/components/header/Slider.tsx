"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { useIconStore } from "@/stores/useIconStore";
import { categoryIconMap } from "@/components/icons/IconMap";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { useRouter } from "next/navigation";
import { slugify } from "@/app/lib/slugify";

export default function CategoryCarousel() {
  const { toggleSidebar, closeSidebar } = useSidebarStore();
  const { categories, fetchCategories, loading } = useCategoryStore();
  const { category3DIcons, fetch3DIcons } = useIconStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (categories.length === 0) fetchCategories();
    fetch3DIcons();
  }, [categories.length, fetchCategories, fetch3DIcons]);

  const sortedCategories = [...categories].sort((a, b) =>
    a.categoryName.toLowerCase().localeCompare(b.categoryName.toLowerCase())
  );

  const displayCategories = [{ categoryName: "All" }, ...sortedCategories];

  const handleCategoryClick = (index: number) => {
    const clickedCategory = displayCategories[index];
    const name = clickedCategory.categoryName;

    if (name === "All") {
      toggleSidebar();
      return;
    }

    closeSidebar();
    setActiveIndex(index);

    const slugCategory = slugify(String(clickedCategory.categoryName));
    let firstSub;
    if (
      "subcategories" in clickedCategory &&
      Array.isArray(clickedCategory.subcategories)
    ) {
      firstSub = clickedCategory.subcategories[0];
    }

    if (firstSub) {
      router.push(`/subcategory/${slugCategory}`);
    } else {
      router.push(`/${slugCategory}`);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="relative w-full pt-4">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/3 p-2 bg-gradient-to-r from-white dark:from-gray-900 to-transparent rounded-r-md"
        aria-label="Scroll Left"
      >
        <img
          src="https://res.cloudinary.com/dkgwkp02d/image/upload/v1749025548/left-arrow_gtzcgu.png"
          alt="Scroll Left"
          className="w-6 h-6 object-contain"
        />
      </button>

      <div className="relative  mx-10">
        <div
          ref={containerRef}
          className="overflow-x-auto scroll-smooth custom-scrollbar cursor-grab"
        >
          <motion.div
            animate={controls}
            className="flex gap-3 px-2"
            style={{ width: "max-content" }}
          >
            {displayCategories.map((category, index) => {
              const name = category.categoryName.trim();
              const Icon = categoryIconMap[name];
              const isActive = activeIndex === index;

              return (
                <div
                  key={`${name}-${index}`}
                  className="relative flex items-center gap-2 px-2 py-3 font-normal text-xs flex-shrink-0 cursor-pointer select-none"
                  onClick={() => handleCategoryClick(index)}
                >
                  {category3DIcons[name] ? (
                    <img
                      src={category3DIcons[name]}
                      alt={`${name} 3D icon`}
                      className="h-6 w-6 object-contain shrink-0"
                    />
                  ) : Icon ? (
                    <Icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-purple-600" : "text-primary"}`}
                    />
                  ) : null}

                  <span
                    className={`font-medium ${isActive ? "text-purple-600" : "text-gray-600"}`}
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/3 p-2 bg-gradient-to-l from-white dark:from-gray-900 to-transparent rounded-l-md"
        aria-label="Scroll Right"
      >
        <img
          src="https://res.cloudinary.com/dkgwkp02d/image/upload/v1749025548/right-arrow_hqeqgu.png"
          alt="Scroll Right"
          className="w-6 h-6 object-contain"
        />
      </button>
    </div>
  );
}
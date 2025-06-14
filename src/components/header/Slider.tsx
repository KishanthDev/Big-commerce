"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { useRouter } from "next/navigation";
import { slugify } from "@/app/lib/slugify";
import icons from "@/data/icons.json";

export default function CategoryCarousel() {
  const { toggleSidebar, closeSidebar } = useSidebarStore();
  const { categories, fetchCategories, loading } = useCategoryStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (categories.length === 0) fetchCategories();
  }, [categories.length, fetchCategories]);

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

  // Find icon URL for a category by name
  const getIconUrl = (categoryName: string) => {
    if (categoryName === "All") {
      return "https://res.cloudinary.com/dkgwkp02d/image/upload/v1748957507/widget_p4gypn.png";
    }

    const category = icons.categories.find(
      (cat) => cat.categoryName.toLowerCase() === categoryName.toLowerCase()
    );
    return category?.icon["default"] || "/Icons/fallback-icon.svg";
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
        <Image
          src="https://res.cloudinary.com/dkgwkp02d/image/upload/v1749025548/left-arrow_gtzcgu.png"
          alt="Scroll Left"
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </button>

      <div className="relative mx-10">
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
              const isActive = activeIndex === index;

              return (
                <div
                  key={`${name}-${index}`}
                  className="relative flex items-center gap-2 px-2 py-3 font-normal text-xs flex-shrink-0 cursor-pointer select-none"
                  onClick={() => handleCategoryClick(index)}
                >
                  <Image
                    src={getIconUrl(name)}
                    alt={`${name} icon`}
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                  <span
                    className={`font-medium ${
                      isActive
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-600 dark:text-white"
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

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/3 p-2 bg-gradient-to-l from-white dark:from-gray-900 to-transparent rounded-l-md"
        aria-label="Scroll Right"
      >
        <Image
          src="https://res.cloudinary.com/dkgwkp02d/image/upload/v1749025548/right-arrow_hqeqgu.png"
          alt="Scroll Right"
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </button>
    </div>
  );
}
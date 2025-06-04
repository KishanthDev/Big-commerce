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

      // Navigate to first subcategory (if exists)
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

  if (loading) return <div className="p-6">Loading...</div>;

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
    </div>
  );
}

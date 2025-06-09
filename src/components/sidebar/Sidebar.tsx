"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { useIconStore } from "@/stores/useIconStore";
import { categoryIconMap } from "@/components/icons/IconMap";
import { subCategoryIconMap } from "@/components/icons/subCategoryIconMap";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { slugify } from "@/app/lib/slugify";
import { slugifyFolderName, formatFileName } from "@/app/lib/file-slugify";
import Image from "next/image";

export default function Sidebar() {
  const { isOpen } = useSidebarStore();
  const { categories, fetchCategories, loading } = useCategoryStore();
  const {
    category3DIconsSlide,
    subCategory3DIcons,
    fetch3DIcons,
  } = useIconStore();
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const currentSlug = pathname?.split("/subcat/")[1];

  useEffect(() => {
    if (categories.length === 0) fetchCategories();
    fetch3DIcons();
  }, [categories.length, fetchCategories, fetch3DIcons]);

  useEffect(() => {
    for (const cat of categories) {
      if (
        cat.subcategories?.some(
          (sub) =>
            slugify(typeof sub === "string" ? sub : sub.subcategoryName) === currentSlug
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

  return (
    <div className="relative w-70 bg-white dark:bg-gray-800 pl-6 pr-6 shadow-lg h-full overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold sticky top-0 z-10 bg-white dark:bg-gray-800 py-4">
        Categories
      </h2>

      {categories
        .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
        .map((cat) => {
          const name = cat.categoryName.trim();
          const isOpenCat = openCategory === Number(cat.id);
          const sortedSub = cat.subcategories?.sort((a, b) => {
            const aName = typeof a === "string" ? a : a.subcategoryName;
            const bName = typeof b === "string" ? b : b.subcategoryName;
            return aName.localeCompare(bName);
          });

          return (
            <div key={cat.id} className="mb-2">
              <a
                href="#"
                className="flex justify-between items-center cursor-pointer font-normal h-[70px] px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCategory(Number(cat.id));
                }}
              >
                <span className="flex items-center gap-2">
                  {category3DIconsSlide[name] ? (
                    <Image
                      width={35}
                      height={35}
                      src={`/Icons/${slugifyFolderName(name)}/${formatFileName(name)}.svg`}
                      alt={`${name} icon`}
                      className="object-contain shrink-0"
                    />
                  ) : categoryIconMap[name] ? (
                    (() => {
                      const Icon = categoryIconMap[name];
                      return <Icon className="h-5 w-5 text-blue-500 shrink-0" />;
                    })()
                  ) : null}

                  {name}
                </span>
                {(sortedSub && sortedSub.length > 0) &&
                  (isOpenCat ? (
                    <ChevronDownIcon className="h-5 w-5" />
                  ) : (
                    <ChevronRightIcon className="h-5 w-5" />
                  ))}
              </a>

              {isOpenCat && Array.isArray(sortedSub) && sortedSub.length > 0 && (
                <div className="pl-6 mt-2 space-y-1">
                  {sortedSub.map((sub) => {
                    const subName = typeof sub === "string" ? sub.trim() : sub.subcategoryName.trim();
                    const subSlug = slugify(subName);
                    const isActive = currentSlug === subSlug;

                    return (
                      <a
                        key={typeof sub === "string" ? sub : sub.subcategoryName}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm cursor-pointer transition-colors ${isActive
                          ? "bg-gray-300 text-blue-700 dark:text-blue-400 dark:bg-gray-700 font-medium"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(
                            `/subcategory/${slugify(cat.categoryName)}/${subSlug}`
                          );
                        }}
                      >
                        {subCategory3DIcons[subName] ? (
                          <Image
                            width={30}
                            height={30}
                            src={`/Icons/${slugifyFolderName(cat.categoryName)}/${formatFileName(subName)}.svg`}
                            alt={`${subName} icon`}
                            className="object-contain shrink-0"
                          />
                        ) : subCategoryIconMap[subName] ? (
                          (() => {
                            const SubIcon = subCategoryIconMap[subName];
                            return <SubIcon className={`h-4 w-4 shrink-0 ${isActive ? "text-blue-600" : "text-blue-500"}`} />;
                          })()
                        ) : null}

                        {subName}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

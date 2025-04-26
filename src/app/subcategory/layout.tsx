"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Category } from "../../../types/category";
import { slugify } from "../lib/slugify";
import categoriesData from "../../../data/detailed_categories_with_subcategories.json";
import Header from "@/components/header/Header";
import { categoryIconMap } from "@/components/icons/IconMap";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const isBusinessPage = /\/subcategory\/[^/]+\/[^/]+\/[^/]+/.test(pathname);

  const toggleCategory = (categorySlug: string) => {
    setOpenCategory((prev) => (prev === categorySlug ? null : categorySlug));
  };

  return (
    <>
      {/* Conditionally render the Header and Sidebar */}
      {!isBusinessPage && <Header />}
      <div className="flex h-[calc(100vh-110px)]">
        {/* Conditionally render the sidebar */}
        {!isBusinessPage && (
          <aside className="sticky top-0 h-full w-48 overflow-y-auto border-r border-gray-300 bg-white shadow-md scrollbar-hide scroll-smooth dark:border-gray-700 dark:bg-black md:w-64">
            <div className="sticky top-0 z-10 bg-white pb-2 dark:bg-black">
              <h2 className="px-4 pt-4 text-xl font-bold tracking-tight md:text-2xl">
                Categories
              </h2>
            </div>
            <div className="space-y-1 px-4 pb-4">
              {categoriesData.map((category: Category, index: number) => {
                const categorySlug = slugify(category.category);
                const isActive =
                  pathname === `/subcategory/${categorySlug}` ||
                  category.subcategories.some((sub) =>
                    pathname.includes(
                      `/subcategory/${categorySlug}/${slugify(sub.name)}`,
                    ),
                  );
                const isOpen = openCategory === categorySlug;

                return (
                  <div key={index}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleCategory(categorySlug)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          toggleCategory(categorySlug);
                        }
                      }}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-3 text-base min-h-[44px] ${
                        isActive
                          ? "bg-blue-100 text-blue-700 font-medium dark:bg-blue-900 dark:text-blue-300"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Link
                        className="flex-1 min-h-[40px] flex items-center"
                        href={`/subcategory/${categorySlug}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {(() => {
                          const name = category.category.trim();
                          const Icon = categoryIconMap[name];
                          return (
                            <>
                              {Icon && (
                                <Icon className="mr-2 h-4 w-4 text-blue-500 shrink-0" />
                              )}
                              {name}
                            </>
                          );
                        })()}
                      </Link>
                      {category.subcategories.length > 0 && (
                        <span className="transition-transform duration-200 ease-in-out">
                          {isOpen ? (
                            <ChevronDownIcon className="h-5 w-5" />
                          ) : (
                            <ChevronRightIcon className="h-5 w-5" />
                          )}
                        </span>
                      )}
                    </div>
                    {isOpen && category.subcategories.length > 0 && (
                      <ul className="animate-slideDown ml-4 mt-1 space-y-2 animateSlideDown">
                        {category.subcategories.map((subcategory, subIndex) => {
                          const subcategorySlug = slugify(subcategory.name);
                          const isSubActive = pathname.includes(
                            `/subcategory/${categorySlug}/${subcategorySlug}`,
                          );

                          return (
                            <li key={subIndex}>
                              <Link
                                className={`block rounded-md p-3 text-sm ${
                                  isSubActive
                                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                                href={`/subcategory/${categorySlug}/${subcategorySlug}`}
                              >
                                {subcategory.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        )}
        {/* Adjust the <main> section if there is no sidebar */}
        <main
          className={`flex-1 overflow-y-auto scrollbar-hide ${
            !isBusinessPage ? "" : "min-h-screen"
          }`}
        >
          {children}
        </main>
      </div>
    </>
  );
}

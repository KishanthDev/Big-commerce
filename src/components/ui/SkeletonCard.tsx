"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const CategoryPageSkeleton = () => {
  return (
    <div className="p-5 space-y-6 bg-gray-100 dark:bg-black pt-30 min-h-screen">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center text-sm space-x-2 animate-pulse">
        <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      {/* FilterBar Skeleton */}
      <div className="dark:bg-gray-800 p-4 rounded-2xl bg-white flex flex-wrap gap-3 animate-pulse">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="h-10 w-28 sm:w-32 bg-gray-300 dark:bg-gray-700 rounded-md"
          />
        ))}
      </div>

      {/* Page Title Skeleton */}
      <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />

      {/* Business Cards Skeletons */}
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden animate-pulse"
          >
            <div className="w-full sm:w-48 h-48 bg-gray-200 dark:bg-gray-800" />

            <div className="flex-1 p-6 space-y-4">
              <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />

              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full" />
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPageSkeleton;

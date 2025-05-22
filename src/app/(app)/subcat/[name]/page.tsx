"use client";

import { useEffect,use } from "react";
import { slugify } from "@/app/lib/slugify";
import { useCategoryStore } from "@/components/stores/useCategoryStore";

interface CategoryPageProps {
  params: Promise<{ name: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categories, fetchCategories, loading } = useCategoryStore();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const resolvedParams = use(params);
  const slug = slugify(resolvedParams.name);

  const subcategory = categories
    .flatMap((cat) => cat.subcategories || [])
    .find((sub) => slugify(String(sub.name ?? sub.subcategoryName)) === slug);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!subcategory) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="min-h-[calc(100vh-200px)] px-4 py-6">
      <div>
        <p>
          Subcategory:{" "}
          {String((subcategory.subcategoryName ?? subcategory.name) || "")}
        </p>
        <p>Subcategory ID: {subcategory.id}</p>
      </div>
    </div>
  );
}
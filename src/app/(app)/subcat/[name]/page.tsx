'use client';

import { useEffect } from 'react';
import { slugify } from '@/app/lib/slugify';
import { useCategoryStore } from '@/components/stores/useCategoryStore';

export default function CategoryPage({ params }: { params: { name: string } }) {
  const { categories, fetchCategories, loading } = useCategoryStore();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const slug = slugify(params.name);

  const subcategory = categories
    .flatMap((cat) => cat.subcategories || [])
    .find((sub) => slugify(String(sub.name ?? sub.subcategoryName)) === slug);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="min-h-[calc(100vh-336px)] px-4 py-6">
      {subcategory ? (
        <div>
          <p>Subcategory: {String((subcategory.subcategoryName ?? subcategory.name) || '')}</p>
          <p>Subcategory ID: {subcategory.id}</p>
        </div>
      ) : (
        <p>Subcategory not found.</p>
      )}

    </div>
  );
}

'use client'

import Image from 'next/image'
import { useCategoryStore } from '@/stores/useCategoryStore'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ImageGridBox() {
    const { categories, loading, error, fetchCategories } = useCategoryStore()
    const [visibleCategories, setVisibleCategories] = useState(4) // Start with 4 categories

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])


    if (loading) return <div className="text-center py-8">Loading categories...</div>
    if (error) return <div className="text-center py-8 text-red-500">Error loading categories: {error}</div>
    if (!categories.length) return <div className="text-center py-8">No categories found</div>

    return (
        <div className="p-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.slice(0, visibleCategories).map((category) => (
                    <div
                        key={category.id}
                        className="rounded-lg border-2 border-gray-200 bg-white p-4 shadow-sm flex flex-col"
                    >
                        {/* Category name as heading */}
                        <h3 className="text-lg font-bold text-center mb-4">
                            {String(category.categoryName)}
                        </h3>

                        {/* Images grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {category.subcategories?.slice(0, 4).map((subcategory) => (
                                <div key={subcategory.id} className="space-y-2">
                                    {/* Image box */}
                                    <div className="w-full aspect-square relative rounded-md overflow-hidden border border-gray-200">
                                        <Image
                                            src={`/images/${String(subcategory.subcategoryName).toLowerCase().replace(/\s+/g, '-')}.jpg`}
                                            alt={String(subcategory.subcategoryName)}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Subcategory name below image */}
                                    <p className="text-sm font-medium text-center">
                                        {String(subcategory.subcategoryName)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Load More button at the bottom of each card */}
                        <div className="mt-auto pt-2">
                            <Link
                                href="#"
                                className="block text-blue-500 hover:underline duration-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Load More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
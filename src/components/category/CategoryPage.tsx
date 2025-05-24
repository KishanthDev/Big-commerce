import Link from "next/link";
import { slugify } from "@/app/lib/slugify";
import categoriesData from "@/data/detailed_categories_with_subcategories.json";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Subcategory } from "../../../types/category";
import { categoryIconMap } from "@/components/icons/IconMap";

interface CategoryType {
  category: string;
  subcategories: Subcategory[];
}

const CategoryPage = () => {
  return (
    <div
      className="flex min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-100"
      data-testid="category-page"
    >
      <main
        className="flex-1 p-6 overflow-y-auto scrollbar-hide"
        data-testid="main-content"
      >
        <div className="mb-6">
          <Breadcrumb />
          <div className="max-w-md mx-auto">
            <input
              className="w-full p-2 border rounded-md shadow-md dark:bg-gray-800 dark:border-gray-600"
              placeholder="Search categories, businesses, or services..."
              type="text"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Explore Categories</h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-testid="categories-grid"
        >
          {categoriesData.map((category: CategoryType) => {
            const visibleSubcats = category.subcategories;
            return (
              <Link
                key={slugify(category.category)} // Use slugified category name as a unique key
                className="block bg-gradient-to-tl from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent bg-white dark:bg-black border border-gray-300 dark:border-gray-700 p-4 rounded-md hover:shadow-md transition"
                href={`/subcategory/${slugify(category.category)}`}
              >
                <h3 className="flex items-center text-lg font-bold mb-2">
                  {(() => {
                    const name = category.category.trim();
                    const Icon = categoryIconMap[name];
                    return (
                      <>
                        {Icon && (
                          <Icon className="mr-2 text-blue-500 h-4 w-4 shrink-0" />
                        )}
                        {name}
                      </>
                    );
                  })()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {visibleSubcats.map((subcat) => (
                    <span
                      key={subcat.name}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                    >
                      {subcat.name}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;

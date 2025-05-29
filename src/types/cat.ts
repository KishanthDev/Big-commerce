// types/category.ts

// Subcategory can be either a string or an object with at least a name property
export type Subcategory = string | {
  id?: string;
  subcategoryName: string;
  imageUrl?: string; // Optional image URL
  [key: string]: unknown; // Allow additional properties
};

// Main Category type matching your store
export interface Category {
  id: string;
  categoryName: string;
  subcategories?: Subcategory[];
  [key: string]: unknown; // Allow additional properties
}

// Type for your store's state
export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
}

// Props for your SubcategoryPage component
export interface SubcategoryPageProps {
  categorySlug: string;
  initialCategory: Category;
}
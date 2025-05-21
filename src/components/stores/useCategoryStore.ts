import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
  [key: string]: unknown;  // safer than any
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryState>()(
  devtools((set) => ({
    categories: [],
    loading: false,
    error: null,
    fetchCategories: async () => {
      set({ loading: true, error: null });
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        set({ categories: data, loading: false });
      } catch (err: unknown) {
        if (err instanceof Error) {
          set({ error: err.message, loading: false });
        } else {
          set({ error: 'Unknown error', loading: false });
        }
      }
    },
  }))
);

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import fallback from "@/data/fallback.json";
import { Category, CategoryState } from "@/types/cat";

export const useCategoryStore = create<CategoryState>()(
  devtools((set, get) => ({
    categories: [],
    loading: false,
    error: null,
    isFetched: false,

    fetchCategories: async () => {
      const { isFetched, loading } = get();

      if (isFetched || loading) return;

      set({ loading: true, error: null });

      try {
        const res = await fetch("/api/categories");

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();
        set({ categories: data, loading: false, isFetched: true });
      } catch (err: unknown) {
        console.warn("Using fallback categories due to API failure.", err);

        set({
          categories: fallback as unknown as Category[],
          loading: false,
          isFetched: true,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    },
  }))
);

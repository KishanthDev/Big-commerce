import { create } from "zustand";
import { devtools } from "zustand/middleware";
import fallback from "@/data/fallback.json";
import { Category, CategoryState } from "@/types/cat";

export const useCategoryStore = create<CategoryState>()(
  devtools((set) => ({
    categories: [],
    loading: false,
    error: null,

    fetchCategories: async () => {
      set({ loading: true, error: null });

      try {
        const res = await fetch("/api/categorie");

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();
        set({ categories: data, loading: false });
      } catch (err: unknown) {
        console.warn("Using fallback categories due to API failure.", err);

        set({
          categories: fallback as unknown as Category[],
          loading: false,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    },
  })),
);

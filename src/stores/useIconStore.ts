import { create } from "zustand";

interface IconData {
  categoryName: string;
  icon: {
    "3d": string;
    "3dSlide"?: string;
  };
  subCategories: {
    subCategoryName: string;
    icon: {
      "3d": string;
    };
  }[];
}

interface IconStoreState {
  category3DIcons: Record<string, string>;
  category3DIconsSlide: Record<string, string>;
  subCategory3DIcons: Record<string, string>;
  fetch3DIcons: () => Promise<void>;
}

export const useIconStore = create<IconStoreState>((set) => ({
  category3DIcons: {},
  category3DIconsSlide: {},
  subCategory3DIcons: {},
  fetch3DIcons: async () => {
    try {
      const response = await fetch("/api/icons");
      const data: IconData[] = response.ok ? await response.json() : [];

      const catMap: Record<string, string> = {};
      const catMapSlide: Record<string, string> = {};
      const subMap: Record<string, string> = {};

      data.forEach((category) => {
        if (category.categoryName && category.icon["3d"]) {
          catMap[category.categoryName.trim()] = category.icon["3d"];
        }
        if (category.categoryName && category.icon["3dSlide"]) {
          catMapSlide[category.categoryName.trim()] = category.icon["3dSlide"];
        }
        category.subCategories.forEach((sub) => {
          if (sub.subCategoryName && sub.icon["3d"]) {
            subMap[sub.subCategoryName.trim()] = sub.icon["3d"];
          }
        });
      });

      set({ category3DIcons: catMap, category3DIconsSlide: catMapSlide, subCategory3DIcons: subMap });
    } catch (error) {
      console.error("Failed to fetch 3D icons", error);
    }
  },
}));
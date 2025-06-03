// stores/useIconStore.ts
import { create } from "zustand";

interface IconStoreState {
  category3DIcons: Record<string, string>;
  subCategory3DIcons: Record<string, string>;
  fetch3DIcons: () => Promise<void>;
}

export const useIconStore = create<IconStoreState>((set) => ({
  category3DIcons: {},
  subCategory3DIcons: {},
  fetch3DIcons: async () => {
    try {
      const [catRes, subRes] = await Promise.all([
        fetch("/api/icons/category-3d"),
        fetch("/api/icons/subcategory-3d"),
      ]);

      const [catIcons, subIcons] = await Promise.all([
        catRes.ok ? catRes.json() : [],
        subRes.ok ? subRes.json() : [],
      ]);

      const catMap = catIcons.reduce((acc: any, item: any) => {
        acc[item.categoryName.trim()] = item.icon["3dSlide"];
        return acc;
      }, {});

      const subMap = subIcons.reduce((acc: any, item: any) => {
        acc[item.subCategoryName.trim()] = item.icon["3d"];
        return acc;
      }, {});

      set({ category3DIcons: catMap, subCategory3DIcons: subMap });
    } catch (error) {
      console.error("Failed to fetch 3D icons", error);
      // Let it fallback to default icons
    }
  },
}));

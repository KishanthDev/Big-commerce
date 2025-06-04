import { create } from "zustand";

interface IconData {
  categoryName?: string;
  subCategoryName?: string;
  icon: {
    "3d"?: string;
    "3dSlide"?: string;
  };
}

interface IconStoreState {
  category3DIcons: Record<string, string>;
  subCategory3DIcons: Record<string, string>;
  category3DIconsSlide: Record<string, string>;
  fetch3DIcons: () => Promise<void>;
}

export const useIconStore = create<IconStoreState>((set) => ({
  category3DIcons: {},
  subCategory3DIcons: {},
  category3DIconsSlide: {},
  fetch3DIcons: async () => {
    try {
      const [catRes, subRes] = await Promise.all([
        fetch("/api/icons/category-3d"),
        fetch("/api/icons/subcategory-3d"),
      ]);

      const [catIcons, subIcons]: [IconData[], IconData[]] = await Promise.all([
        catRes.ok ? catRes.json() : [],
        subRes.ok ? subRes.json() : [],
      ]);

      const catMap: Record<string, string> = catIcons.reduce((acc, item) => {
        if (item.categoryName && item.icon["3d"]) {
          acc[item.categoryName.trim()] = item.icon["3d"];
        }
        return acc;
      }, {} as Record<string, string>);


        const catMapSlide: Record<string, string> = catIcons.reduce((acc, item) => {
        if (item.categoryName && item.icon["3dSlide"]) {
          acc[item.categoryName.trim()] = item.icon["3dSlide"];
        }
        return acc;
      }, {} as Record<string, string>);

      const subMap: Record<string, string> = subIcons.reduce((acc, item) => {
        if (item.subCategoryName && item.icon["3d"]) {
          acc[item.subCategoryName.trim()] = item.icon["3d"];
        }
        return acc;
      }, {} as Record<string, string>);

      set({ category3DIcons: catMap, subCategory3DIcons: subMap , category3DIconsSlide: catMapSlide });
    } catch (error) {
      console.error("Failed to fetch 3D icons", error);
    }
  },
}));

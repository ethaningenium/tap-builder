import { create } from "zustand";
import { PageMeta } from "@/entities/pages";

type PageStore = {
  pages: PageMeta[];
  setPage: (pages: PageMeta[]) => void;
  addPage: (page: PageMeta) => void;
  updatePage: (page: PageMeta) => void;
  removePage: (address: string) => void;
};

export const usePageStore = create<PageStore>((set) => ({
  pages: [],
  setPage: (pages) => set({ pages }),
  addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),
  updatePage: (page) =>
    set((state) => {
      const newPages = state.pages.map((p) => {
        if (p.id === page.id) return page;
        return p;
      });
      return { pages: newPages };
    }),
  removePage: (address) =>
    set((state) => {
      const newPages = state.pages.filter((p) => p.address !== address);
      return { pages: newPages };
    }),
}));

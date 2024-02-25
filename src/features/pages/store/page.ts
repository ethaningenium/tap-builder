import { create } from "zustand";
import { Page } from "@/entities/pages";

type PageStore = {
  pages: Page[];
  setPage: (pages: Page[]) => void;
  addPage: (page: Page) => void;
  updatePage: (page: Page) => void;
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
}));

import { create } from "zustand";
import { PageWithBricks } from "@/types/Page";

type PageStore = {
  pages: PageWithBricks[];
  setPage: (pages: PageWithBricks[]) => void;
  addPage: (page: PageWithBricks) => void;
  updatePage: (page: PageWithBricks) => void;
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

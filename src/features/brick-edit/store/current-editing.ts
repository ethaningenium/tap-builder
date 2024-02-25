import { Brick, PageMeta } from "@/entities/pages";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CurrentPage {
  bricks: Brick[];
  page: PageMeta;
  setBricks: (bricks: Brick[]) => void;
  changeBrick: (brick: Brick) => void;
  deleteBrick: (id: string) => void;
  addBrick: (brick: Brick) => void;
  setPage: (page: PageMeta) => void;
}

export const useCurrentPage = create<CurrentPage>()(
  devtools((set) => ({
    bricks: [],
    page: {
      id: "",
      title: "",
      address: "",
      theme: "",
      favicon: "",
    },
    setBricks: (bricks: Brick[]) => set({ bricks }),
    changeBrick: (brick: Brick) => {
      set((state) => ({
        bricks: state.bricks.map((b) => (b.id === brick.id ? brick : b)),
      }));
    },
    deleteBrick: (id: string) => {
      set((state) => ({
        bricks: state.bricks.filter((b) => b.id !== id),
      }));
    },
    addBrick: (brick: Brick) => {
      set((state) => ({
        bricks: [...state.bricks, brick],
      }));
    },
    setPage: (page: PageMeta) => set({ page }),
  }))
);

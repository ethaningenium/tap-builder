import { Brick } from "@/types/Brick";
import { Page } from "@/types/Page";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EditStore {
  bricks: Brick[];
  page: Page;
  setBricks: (bricks: Brick[]) => void;
  changeBrick: (brick: Brick) => void;
  deleteBrick: (id: string) => void;
  addBrick: (brick: Brick) => void;
}

export const useEditStore = create<EditStore>()(
  devtools((set) => ({
    bricks: [],
    page: {
      title: "",
      address: "",
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
  }))
);

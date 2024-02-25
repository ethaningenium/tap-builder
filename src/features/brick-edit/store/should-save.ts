import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Save {
  shouldSave: boolean;
  setShouldSave: (bool: boolean) => void;
}

export const useShouldSave = create<Save>()(
  devtools((set) => ({
    shouldSave: false,
    setShouldSave: (bool) => set(() => ({ shouldSave: bool })),
  }))
);

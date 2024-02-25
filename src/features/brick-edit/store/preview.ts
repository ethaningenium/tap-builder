import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Preview {
  isPreview: boolean;
  togglePreview: () => void;
}

export const usePreview = create<Preview>()(
  devtools((set) => ({
    isPreview: false,
    togglePreview: () => set((state) => ({ isPreview: !state.isPreview })),
  }))
);

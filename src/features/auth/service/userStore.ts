import { create } from "zustand";

export type User = {
  email: string;
  name: string;
};

export type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    email: "",
    name: "",
  },
  setUser: (newUser) => set(() => ({ user: newUser })),
}));

import { create } from "zustand";

const useNavBar = create((set) => ({
  menu: [],
  setMenu: (menu) => set((state) => ({ ...state, menu })),
}));

export default useNavBar;

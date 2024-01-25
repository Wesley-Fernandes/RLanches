import { create } from "zustand";

interface props {
  checked: boolean;
  toogle: () => void;
}

export const useDrawnerStore = create<props>((set) => ({
  checked: false,
  toogle: () =>
    set((state) => ({ checked: state.checked == true ? false : true })),
}));

import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
}));

export default useStore;

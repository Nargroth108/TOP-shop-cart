import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],

  addItem: (item) =>
    set((state) => ({
      cartItems: [
        ...state.cartItems,
        {
          ...item,
          amount: 1,
        },
      ],
    })),

  removeItem: (item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id),
    })),

  increaseItemAmount: (item) =>
    set((state) => ({
      cartItems: [
        ...state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem,
        ),
      ],
    })),

  decreaseItemAmount: (item) =>
    set((state) => ({
      cartItems: [
        ...state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                amount: cartItem.amount - 1,
              }
            : cartItem,
        ),
      ],
    })),
}));

export default useStore;

import { create } from "zustand";

interface Item {
   title: string;
   price: number;
}

interface CartStore {
   items: Item[];
   addToCart: (item: Item) => void;
   removeFromCart: (index: number) => void;
   clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
   items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
   addToCart: (item) =>
      set((state) => {
         const newItems = [...state.items, item];
         localStorage.setItem("cartItems", JSON.stringify(newItems));
         return { items: newItems };
      }),
   removeFromCart: (index) =>
      set((state) => {
         const newItems = state.items.filter((_, i) => i !== index);
         localStorage.setItem("cartItems", JSON.stringify(newItems));
         return { items: newItems };
      }),
   clearCart: () => set({ items: [] }, false),
}));


export default useCartStore;

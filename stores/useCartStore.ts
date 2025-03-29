import { Product } from "@/types/Product";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  quantity: number;
  price: number;
  discountPrice?: number;
  image: string;
  title: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (type: "increment" | "decrement", id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          });
          toast.success(`Success adedd ${product.title} to cart!`);
        } else {
          set({
            items: [
              ...items,
              {
                id: product.id,
                title: product.title,
                price: product.price,

                image: product.images[0],
                quantity: 1,
              },
            ],
          });
          toast.success(`Success added ${product.title} to cart!`);
        }
      },
      removeFromCart: (id) => {
        const { items } = get();
        set({
          items: items.filter((item) => item.id !== id),
        });
      },
      updateQty: (type, id) => {
        const item = get().items.find((item) => item.id === id);
        if (!item) {
          return;
        }

        if (type === "decrement" && item.quantity <= 1) {
          return;
        }

        item.quantity =
          type === "decrement" ? item.quantity - 1 : item.quantity + 1;
        set({
          items: [...get().items],
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
          (total, item) =>
            total + (item.discountPrice || item.price) * item.quantity,
          0
        );
      },
    }),
    { name: "cart-storage" }
  )
);

export const useAddToCart = () => useCartStore((state) => state.addToCart);
export const useUpdateQty = () => useCartStore((state) => state.updateQty);
export const useRemoveFromCart = () =>
  useCartStore((state) => state.removeFromCart);

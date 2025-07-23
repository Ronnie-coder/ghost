import { create } from 'zustand';
import { Product } from '@/data/products';
import { toast } from "sonner";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
    const cart = get();
    const cartItem = cart.items.find(item => item.id === product.id);

    if (cartItem) {
      // If item exists, update its quantity
      const updatedCart = cart.items.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ items: updatedCart });
    } else {
      // If item doesn't exist, add it to the cart
      set({ items: [...cart.items, { ...product, quantity: 1 }] });
    }
    toast.success(`${product.name} added to cart!`);
  },
  removeFromCart: (productId) => {
    set({ items: get().items.filter(item => item.id !== productId) });
  },
  clearCart: () => {
    set({ items: [] });
  }
}));
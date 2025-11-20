"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getCart, CartItem } from "@/utils/cart";

type CartContextType = {
  count: number;
  refresh: () => void;
};

const CartContext = createContext<CartContextType>({
  count: 0,
  refresh: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize state lazily from localStorage (only on client)
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    const cart: CartItem[] = getCart();
    return cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  });

  // Refresh function for manual updates
  const refresh = useCallback(() => {
    const cart: CartItem[] = getCart();
    const total = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
    setCount(total);
  }, []);

  useEffect(() => {
    // Listen for updates from other tabs/components
    const handler = () => refresh();
    window.addEventListener("cart-updated", handler);
    return () => window.removeEventListener("cart-updated", handler);
  }, [refresh]);

  return (
    <CartContext.Provider value={{ count, refresh }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
// utils/cart.ts
export type Product = {
  id?: string;
  title: string;
  price: number;
  img?: string;
  category?: string;
  quantity: number;
};

export type CatalogProduct = {
  id?: string;
  title: string;
  price: number;
  img?: string;
  category?: string;
};

export type CartItem = {
  id?: string;
  title: string;
  price: number;
  img?: string;
  category?: string;
  quantity: number;
};

const CART_KEY = "adgx_cart_v1";

function safeParse<T>(str: string | null, fallback: T): T {
  try {
    if (!str) return fallback;
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
}

/** Get current cart (client only). Returns empty array on SSR. */
export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(CART_KEY);
  return safeParse<CartItem[]>(raw, []);
}

/** Overwrite saved cart */
export function saveCart(cart: CartItem[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(cart));

  // Notify all listeners (CartContext or Navbar)
  window.dispatchEvent(new Event("cart-updated"));
}

/** Add product to cart or update quantity if already exists */
export function addToCart(product: Product, qty = 1): CartItem[] {
  if (typeof window === "undefined") return [];

  const cart = getCart();

  // identify product by id when available, else by title
  const matchIndex = cart.findIndex((c) =>
    product.id != null ? c.id === product.id : c.title === product.title
  );

  if (matchIndex >= 0) {
    cart[matchIndex].quantity = Math.max(1, cart[matchIndex].quantity + qty);
  } else {
    const newItem: CartItem = {
      ...product,
      quantity: Math.max(1, qty),
    };
    cart.push(newItem);
  }

  saveCart(cart);
  return cart;
}

/** Remove product from cart by id or title */
export function removeFromCart(productIdOrTitle: string | number): CartItem[] {
  if (typeof window === "undefined") return [];

  const cart = getCart().filter((item) =>
    typeof productIdOrTitle === "number" || typeof productIdOrTitle === "string"
      ? item.id != null
        ? item.id !== productIdOrTitle
        : item.title !== String(productIdOrTitle)
      : true
  );

  saveCart(cart);
  return cart;
}

/** Update quantity for a cart item (by id or title) */
export function updateQuantity(
  productIdOrTitle: string | number,
  quantity: number
): CartItem[] {
  if (typeof window === "undefined") return [];

  const cart = getCart().map((item) => {
    const match =
      item.id != null
        ? item.id === productIdOrTitle
        : item.title === String(productIdOrTitle);

    if (match) {
      return { ...item, quantity: Math.max(1, Math.floor(quantity)) };
    }
    return item;
  });

  saveCart(cart);
  return cart;
}

/** Clear whole cart */
export function clearCart(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CART_KEY);

  // Notify all listeners
  window.dispatchEvent(new Event("cart-updated"));
}
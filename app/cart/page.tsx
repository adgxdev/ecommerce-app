"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import RecommendCard from "@/components/cart/RecommendCard";
import { ArrowLeft, Trash2 } from "lucide-react";
import {
  getCart,
  updateQuantity,
  removeFromCart,
  type CartItem,
} from "@/utils/cart";
import { useCart } from "@/context/CartContext";
import Link from "next/link";


export default function CartPage() {
  const { refresh } = useCart(); // refresh updates navbar count
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items and refresh navbar
  const loadCart = useCallback(() => {
    const cart = getCart();
    setCartItems(cart);
    refresh();
  }, [refresh]); // include any external dependencies

  // Load cart on mount, defer to avoid React 18 warning
  useEffect(() => {
    Promise.resolve().then(loadCart);

    // Listen for cross-tab updates
    const handler = () => loadCart();
    window.addEventListener("cart-updated", handler);

    return () => window.removeEventListener("cart-updated", handler);
  }, [loadCart]);

  // keep subtotal derived and memoized
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, it) => {
      // extract numeric part from price string, e.g. "$49.99" -> 49.99
      const num = Number(String(it.price ?? "").replace(/[^0-9.]+/g, ""));
      const unit = isNaN(num) ? 0 : num;
      return acc + unit * (it.quantity ?? 1);
    }, 0);
  }, [cartItems]);

  // handlers call util functions which already persist and return updated cart
  function handleDecrease(item: CartItem) {
    if ((item.quantity ?? 1) <= 1) return;
    const key = item.id ?? item.title;
    const updated = updateQuantity(key, (item.quantity ?? 1) - 1);
    setCartItems(updated);
    refresh();
  };

  function handleIncrease(item: CartItem) {
    const key = item.id ?? item.title;
    const updated = updateQuantity(key, (item.quantity ?? 1) + 1);
    setCartItems(updated);
    refresh();
  }

  function handleRemove(item: CartItem) {
    const key = item.id ?? item.title;
    const updated = removeFromCart(key);
    setCartItems(updated);
    refresh();
  }

  return (
    <div className="font-display bg-background-light text-text-body min-h-screen">
      {/* HEADER */}
      <Navbar />

      {/* MAIN */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col gap-12">
          {/* TITLE */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h1 className="text-text-headings text-4xl md:text-5xl font-black">
              Your Shopping Cart
            </h1>
            <Link className="flex items-center gap-2 text-primary hover:underline" href="/marketplace">
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            {cartItems.length === 0 && (
              <div className="rounded-lg shadow-sm border border-border-light bg-white divide-y divide-border-light lg:col-span-2 flex flex-col gap-4 py-12 items-center justify-center">
                <p className="text-center py-6 text-gray-500">Your cart is empty</p>
              </div>
              
            )}

            {/* CART ITEMS */}
            {cartItems.length > 0 && (
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="rounded-lg shadow-sm border border-border-light bg-white divide-y divide-border-light">
                  {cartItems.map((item, i) => {
                    const key = item.id ?? `${item.title}-${i}`;
                    return (
                      <div key={key} className="flex flex-wrap items-center gap-4 p-4 justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className="bg-center bg-no-repeat bg-cover rounded-lg size-16"
                            style={{ backgroundImage: `url("${item.img ?? ""}")` }}
                          />
                          <div className="flex flex-col">
                            <p className="text-text-headings font-bold">{item.title}</p>
                            {/* category optional */}
                            {item.category && <p className="text-text-body text-sm">{item.category}</p>}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 md:gap-8 ml-auto">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 text-text-headings">
                            <button
                              onClick={() => handleDecrease(item)}
                              aria-label={`Decrease ${item.title}`}
                              className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-100"
                            >
                              -
                            </button>

                            <input
                              type="number"
                              value={item.quantity ?? 1}
                              readOnly
                              className="pe-2 w-16 text-center bg-transparent border-none focus:outline-0"
                            />

                            <button
                              onClick={() => handleIncrease(item)}
                              aria-label={`Increase ${item.title}`}
                              className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-100"
                            >
                              +
                            </button>
                          </div>

                          {/* Price display: keep original string if you want */}
                          <p className="text-text-headings font-bold w-16 text-right">
                            {/* Show per-item or total per-line? we'll show total price for that line: */}
                            ${((Number(String(item.price ?? "").replace(/[^0-9.]+/g, "")) || 0) * (item.quantity ?? 1)).toFixed(2)}
                          </p>

                          <button
                            onClick={() => handleRemove(item)}
                            className="text-text-body hover:text-red-500"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="rounded-lg shadow-sm border border-border-light bg-white p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-text-headings">Order Summary</h3>

                  <div className="space-y-3 text-text-body">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-text-headings">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-border-light pt-4">
                    <p className="text-sm font-medium text-text-headings mb-2">Coupon Code</p>
                    <div className="flex gap-2">
                      <input
                        className="form-input w-full bg-gray-100 px-4 rounded-lg h-10 placeholder:text-text-body focus:border-primary focus:ring-primary"
                        placeholder="Enter coupon code"
                      />
                      <button className="h-10 px-4 bg-primary/20 rounded-lg text-primary font-bold">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-border-light my-2"></div>

                  <div className="flex justify-between text-lg font-bold text-text-headings">
                    <span>Estimated Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <button className="w-full h-12 bg-linear-to-r from-primary to-secondary text-white rounded-lg font-bold shadow-lg">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* YOU MIGHT ALSO LIKE */}
          <div>
            <h2 className="text-2xl font-bold text-text-headings mb-6">You Might Also Like</h2>
            <RecommendCard />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}
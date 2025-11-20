"use client";

import React from "react";
import { addToCart } from "@/utils/cart";
import { ShoppingCart } from "lucide-react";

export type Product = {
  id?: string;
  title: string;
  desc?: string;
  price: number | string;
  img?: string;
  category?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: Number(product.price), // convert to number
      img: product.img,
      category: product.category,
      quantity: 1,
    });
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border-light bg-background-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg/50">
      {/* Image */}
      <div className="relative">
        <div
          className="aspect-video w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${product.img}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold">{product.title}</h3>
        {product.desc && (
          <p className="mt-1 text-sm text-text-secondary-light">{product.desc}</p>
        )}
        <p className="mt-4 text-lg font-bold text-primary">
            ${((Number(String(product.price ?? "").replace(/[^0-9.]+/g, "")) || 0)).toFixed(2)}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="flex h-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
            Preview
          </button>
          <button className="flex h-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
            Live Demo
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
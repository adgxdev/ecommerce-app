"use client";

import { ShoppingCart } from "lucide-react";
import { products } from "@/utils"; // adjust path if needed
import { CatalogProduct } from "@/utils/cart"; // adjust path if needed
import { addToCart } from "@/utils/cart";
import { useCart } from "@/context/CartContext";

export default function RecommendCard() {
  const { refresh } = useCart(); // context refresh to update cart count in navbar

  const handleAdd = (product: CatalogProduct) => {
    addToCart({ ...product, quantity: 1 });
    refresh(); // update navbar cart count
  };

  // Filter recommended products (example: first 4)
  const recommendedProducts = products.slice(0, 8); // you can change logic

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recommendedProducts.map((product, i) => (
        <div
          key={i}
          className="flex flex-col rounded-lg border border-border-light bg-white shadow-sm hover:shadow-md"
        >
          <div
            className="rounded-t-lg bg-center bg-cover aspect-16/10"
            style={{
              backgroundImage: `url('${product.img}')`,
            }}
          />
          <div className="p-4 flex flex-col grow">
            <h4 className="font-bold text-text-headings">{product.title}</h4>
            <p className="text-sm text-text-body mt-1">{product.category}</p>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-light">
              <p className="font-bold text-primary">${product.price}</p>
              <button
                onClick={() => handleAdd(product)}
                className="text-primary text-sm font-bold flex items-center gap-1"
              >
                Add{" "}
                <span className="material-symbols-outlined text-base">
                  <ShoppingCart className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
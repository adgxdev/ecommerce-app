import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils";
import { ChevronDown } from "lucide-react";

// Helper: get products by slug
function getProducts(slug: string) {
  return products.filter((p) => p.category === slug);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;
    const items = getProducts(slug);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light text-text-light">
      <Navbar />

      <main className="container mx-auto flex-1 px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="col-span-1">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <section className="col-span-1 lg:col-span-3">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-border-light pb-4 md:flex-row md:items-center">
              <h1 className="text-2xl font-bold capitalize">
                {slug.replace("-", " ")}
              </h1>

              {/* Sorting */}
              <div className="flex items-center gap-2">
                <label
                  className="text-sm text-text-secondary-light"
                  htmlFor="sort"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="form-select rounded-lg border-border-light bg-background-light text-sm focus:border-primary focus:ring-primary/50"
                >
                  <option>Newest</option>
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            {items.length === 0 && (
                <p className="mt-8 text-center text-lg text-gray-500">
                    No products available in this category.
                </p>
            )}
            {/* Product Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton
        phoneNumber="15551234567"
        message="Hi, I want to learn more!"
      />
    </div>
  );
}

/* ---------------------------
   FILTER SIDEBAR (Client Component)
---------------------------- */
function FilterSidebar() {
  return (
        <div className="sticky top-24 rounded-xl border border-border-light bg-background-light p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Filters</h3>
            <p className="text-sm text-text-secondary-light">
                Refine your search
            </p>
          </div>
          <div className="flex flex-col">
            {/* Category Filter */}
            <details className="flex flex-col border-t border-border-light py-2 group" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-sm font-medium">Category</p>
                <span className="material-symbols-outlined text-lg text-text-secondary-light transition-transform group-open:rotate-180">
                    <ChevronDown />
                </span>
                </summary>
                <div className="pt-2">
                {["Websites", "AI Tools", "APIs", "Scripts", "E-Learning"].map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-x-3 py-1.5">
                    <input
                        type="checkbox"
                        defaultChecked={cat === "AI Tools"}
                        className="h-4 w-4 rounded-full border-border-light text-primary focus:ring-primary/50 focus:ring-offset-background-light"
                    />
                    <p className="text-sm font-normal text-text-secondary-light">
                        {cat}
                    </p>
                    </label>
                ))}
                </div>
            </details>

            {/* Price Filter */}
            <details className="flex flex-col border-t border-border-light py-2 group" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-sm font-medium">Price</p>
                <span className="material-symbols-outlined text-lg text-text-secondary-light transition-transform group-open:rotate-180">
                    <ChevronDown />
                </span>
                </summary>
                <div className="relative flex w-full flex-col items-start justify-between gap-3 pt-4 pb-2 px-1">
                <div className="flex h-[38px] w-full pt-1.5">
                    <div className="flex h-1.5 w-full rounded-full bg-border-light pl-[10%] pr-[30%]">
                    <div className="relative">
                        <div className="absolute -left-3 -top-1.5 flex flex-col items-center">
                        <div className="size-4 cursor-pointer rounded-full bg-primary ring-2 ring-background-light"></div>
                        <p className="mt-2 text-xs font-medium text-text-secondary-light">$50</p>
                        </div>
                    </div>
                    <div className="h-1.5 flex-1 rounded-full bg-linear-to-r from-primary to-secondary"></div>
                    <div className="relative">
                        <div className="absolute -right-3 -top-1.5 flex flex-col items-center">
                        <div className="size-4 cursor-pointer rounded-full bg-primary ring-2 ring-background-light"></div>
                        <p className="mt-2 text-xs font-medium text-text-secondary-light">$750</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </details>

            {/* Type Filter */}
            <details className="flex flex-col border-t border-border-light py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-sm font-medium">Type</p>
                <span className="material-symbols-outlined text-lg text-text-secondary-light transition-transform group-open:rotate-180">
                    <ChevronDown />
                </span>
                </summary>
                <div className="pt-2">
                {["WordPress Theme", "React Component", "Python Script"].map((type, idx) => (
                    <label key={idx} className="flex items-center gap-x-3 py-1.5">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded-full border-border-light text-primary focus:ring-primary/50 focus:ring-offset-background-light"
                    />
                    <p className="text-sm font-normal text-text-secondary-light">{type}</p>
                    </label>
                ))}
                </div>
            </details>
          </div>

          {/* Filter Buttons */}
          <div className="mt-6 flex flex-col gap-2 border-t border-border-light pt-6">
            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-opacity-90">
                Apply Filters
            </button>
            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent px-4 text-sm font-bold text-text-secondary-light ring-1 ring-border-light hover:bg-primary/10">
                Reset
            </button>
          </div>
      </div>
  );
}
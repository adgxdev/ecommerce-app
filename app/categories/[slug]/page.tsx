import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";
import { products } from "@/utils";
import { ChevronDown, ShoppingCart } from "lucide-react";

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
                <div
                  key={i}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border-light bg-background-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg/50"
                >
                  <div className="relative">
                    <div
                      className="aspect-video w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${product.img}')` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary-light">
                      {product.desc}
                    </p>
                    <p className="mt-4 text-lg font-bold text-primary">
                      {product.price}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button className="flex h-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                        Preview
                      </button>
                      <button className="flex h-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                        Live Demo
                      </button>
                    </div>

                    <button className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
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
        <p className="text-sm text-text-secondary-light">Refine your search</p>
      </div>

      <div className="flex flex-col">
        {/* Category Filter */}
        <details
          className="flex flex-col border-t border-border-light py-2 group"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-sm font-medium">Category</p>
            <ChevronDown className="size-4 group-open:rotate-180 transition-transform" />
          </summary>

          <div className="pt-2">
            {["Websites", "AI Tools", "APIs", "Scripts", "E-Learning"].map(
              (cat, idx) => (
                <label key={idx} className="flex items-center gap-x-3 py-1.5">
                  <input type="checkbox" className="h-4 w-4 rounded-full" />
                  <p className="text-sm text-text-secondary-light">{cat}</p>
                </label>
              )
            )}
          </div>
        </details>

        {/* Price */}
        <details className="flex flex-col border-t border-border-light py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-sm font-medium">Price</p>
            <ChevronDown className="size-4 group-open:rotate-180 transition-transform" />
          </summary>
        </details>
      </div>
    </div>
  );
}
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";

// app/cart/page.tsx
export default function CartPage() {
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
            <a className="flex items-center gap-2 text-primary hover:underline" href="#">
              <span className="material-symbols-outlined"><ArrowLeft className="h-5 w-5" /></span>
              <span>Continue Shopping</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* CART ITEMS */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="rounded-lg shadow-sm border border-border-light bg-white divide-y divide-border-light">

                {/* --- SAMPLE ITEM (Repeat in real app) */}
                {[
                  {
                    title: "AI Chatbot Script",
                    price: "49.00",
                    thumb:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSf9gLxrO9XbF8VkCZNNBSJslfFmnRd0xin2T3ksFxItWuvUeFTR4jV-TMIzQ8ZAIEiHhFSsM_0IxZFPhHv-MTXr-Au37um2AFU7eAXeSXHyA8UBR8kILQtMS94bCdvHdUsrcyDXn6TeFu9tIGzop3xlOzVBLbFgjMijEFbWSOyJdUWIr2NVjJPTIJarTNtq2aj-oxviFCHD09wBDn1B7-u1OrfLSLQiIV7kDJZP4rs3ln2TrVNZpAFJPZ-4abOn_nu6sgEEcRyvE",
                    category: "AI Tool",
                  },
                  {
                    title: "Modern Portfolio Website",
                    price: "99.00",
                    thumb:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnak9JjqSNvl_9U2IDo8kX89Z0kUXZ4ZIkl-xbxaIz1BlCgig9dksmeUZvbVzecoikPYI4IIVVx_WrFcqGh5FPrvYkNTV7rULFg0UBeiO8a2XcBN88YMWb0NfG3pJ75CKLsjDlQFOmt8xF2z8u_zvng88FPBKa8-KnvLqyM_30kGsaysNPNXun36qsf6hHTccRv7XkaENjarZk06YlrrxpR4i961FN7skOziYFDWwM0Vd1HrJZL70M1ZJENQetXJzhn93ocGlnKFU",
                    category: "Website Template",
                  },
                  {
                    title: "E-learning Course on Python",
                    price: "129.00",
                    thumb:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJVdBXrw6iFFnavbHrR-Zj5h05SX7L-EbBrttjpv6e_AJNYs_NY3tySK0rmFtbhRAQlXWFOMyu_ohrsk1si7vBfmVuK4S0_Qjvlag96Rke9VBZ2thrwc57VydyOujlM17fjopfFwJNYp1SPlsPsk1zb6L_m1i2XpNZ39JmNF6byyEB4Dn6zaw63DfIBi2Bi6ItF4iOAJfR2oWXtGW3dx-cCzkhZyH4vSTRY2fR4fUoWbppnUmuQSJXB4LXhvhgxjejnPTfItlzns",
                    category: "E-learning Resource",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center gap-4 p-4 justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat bg-cover rounded-lg size-16"
                        style={{ backgroundImage: `url("${item.thumb}")` }}
                      />
                      <div className="flex flex-col">
                        <p className="text-text-headings font-bold">
                          {item.title}
                        </p>
                        <p className="text-text-body text-sm">{item.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8 ml-auto">
                      <div className="flex items-center gap-2 text-text-headings">
                        <button className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-100">
                          -
                        </button>
                        <input
                          type="number"
                          defaultValue={1}
                          className="pe-2 w-16 text-center bg-transparent border-none focus:outline-0"
                        />
                        <button className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-100">
                          +
                        </button>
                      </div>

                      <p className="text-text-headings font-bold w-16 text-right">
                        ${item.price}
                      </p>

                      <button className="text-text-body hover:text-red-500">
                        <span className="material-symbols-outlined"><Trash2 className="h-5 w-5" /></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="rounded-lg shadow-sm border border-border-light bg-white p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-text-headings">
                    Order Summary
                  </h3>

                  <div className="space-y-3 text-text-body">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-text-headings">$277.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-border-light pt-4">
                    <p className="text-sm font-medium text-text-headings mb-2">
                      Coupon Code
                    </p>
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
                    <span>$277.00</span>
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
            <h2 className="text-2xl font-bold text-text-headings mb-6">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Items would be mapped in real app */}
              <div className="flex flex-col rounded-lg border border-border-light bg-white shadow-sm hover:shadow-md">
                <div
                  className="rounded-t-lg bg-center bg-cover aspect-16/10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhuJnjBZ1QAX_lFhhNpQQsh7pzzHeLlU9emz5tEWgzWoX0g4X6eqZLCcimbs6GGMIFGLTAKtWzBhuh1bG2NwU7SOWnGvqHefgabIDe8jN8McuTvIe-H8HGQWWW2pM5p2TRwVfzOAFze6Ne9rhVlW0-ABuahIF3w-YHWaIUX4b0c9nOPEIpqVsA9qLwq8S1Wl3QNGVckidmRBGGE-C4KJ1kaiqvzWcIXlTT9LoP49PXeUIPS9ANLcd2DMRy0CrZzdzeHU9DJ_qybdw")',
                  }}
                />
                <div className="p-4 flex flex-col grow">
                  <h4 className="font-bold text-text-headings">UI/UX Design Masterclass</h4>
                  <p className="text-sm text-text-body mt-1">E-learning Course</p>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-light">
                    <p className="font-bold text-primary">$199</p>
                    <button className="text-primary text-sm font-bold flex items-center gap-1">
                      Add{" "}
                      <span className="material-symbols-outlined text-base"><ShoppingCart className="h-4 w-4" /></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-border-light bg-white shadow-sm hover:shadow-md">
                <div
                  className="rounded-t-lg bg-center bg-cover aspect-16/10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS5wAVFqwzXR9Vko6Crzo-NUZRbu_rKK0yhCiIgvt74ormkv5GZK4uK3qsuZ_KgKBzRTcCzJ0qoi01b9uoQqfWzEE-ZpWU6vubhBuGAKEa5CfcFjX90Fsujd1xIyNuX_nIg8p6v6wWXDZQa87ksNtm5SJvXgpc3Q6VN80C0OH3YlSNiLIHwkVgRI5OZ4ATw39avb9OOT1r_B2Gwm-hlM9wV9IFJmQMAio0mAaF3TPXHxbyYE3QQegtcZEcAvYDD-t8u0Zm8Gfa2fY")',
                  }}
                />
                <div className="p-4 flex flex-col grow">
                  <h4 className="font-bold text-text-headings">SaaS Boilerplate Kit</h4>
                  <p className="text-sm text-text-body mt-1">Script</p>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-light">
                    <p className="font-bold text-primary">$249</p>
                    <button className="text-primary text-sm font-bold flex items-center gap-1">
                      Add{" "}
                      <span className="material-symbols-outlined text-base"><ShoppingCart className="h-4 w-4" /></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-border-light bg-white shadow-sm hover:shadow-md">
                <div
                  className="rounded-t-lg bg-center bg-cover aspect-16/10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrUqX1FgVKJRnWoej_cYDwuzUj65ToYEZPK0TTOdd4stiLHeXsqY6SDS5xGpIjq8gaSpcWcKAUvMUWjxkN_yotjWxNZaJ1Hsv4ck9kDoR_FuHfm271KsMk6u_AuJhyCQ8xAzDwx8nChgQglohDdChGS7Hj7GD1VC9EDx3-4emxxoRTq3NiuQVwEYYwBumnX2gkvPpLN_uWNwMxGEUv7hxVRsZ850Qt1IYDwI7-Wz0-WK0l23WBCZrKVqhRKd6YuJGaxbn_n5ITcSo")',
                  }}
                />
                <div className="p-4 flex flex-col grow">
                  <h4 className="font-bold text-text-headings">Mobile App UI Kit</h4>
                  <p className="text-sm text-text-body mt-1">App Template</p>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-light">
                    <p className="font-bold text-primary">$79</p>
                    <button className="text-primary text-sm font-bold flex items-center gap-1">
                      Add{" "}
                      <span className="material-symbols-outlined text-base"><ShoppingCart className="h-4 w-4" /></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-border-light bg-white shadow-sm hover:shadow-md">
                <div
                  className="rounded-t-lg bg-center bg-cover aspect-16/10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9A3GMLiN6Dnth_pDmNz3xen3yMj07yKbFTZA5fC3uxv-Iycrr3eQpNXBLjc84hMGRdtd86dprKrP_ItkKrZhr16KjwaIUaZOCPmLSlITYr777yd85ijRfNJra2NHYxGqm4uIa5V7tVs7f4S5yPouBDBL4oJjJU3ZmsRkTdeynssv0lwSpovtBi3ECSFu7W6Q6pXpuUvDIREMQuLVQ8ylTpcRdteATIhAgCcfIVaB0lZF6AJKCMa9OCVcxu6tf8UJ5iYw4nXAvJxc")',
                  }}
                />
                <div className="p-4 flex flex-col grow">
                  <h4 className="font-bold text-text-headings">Weather Data API</h4>
                  <p className="text-sm text-text-body mt-1">API</p>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-light">
                    <p className="font-bold text-primary">$15/mo</p>
                    <button className="text-primary text-sm font-bold flex items-center gap-1">
                      Add{" "}
                      <span className="material-symbols-outlined text-base"><ShoppingCart className="h-4 w-4" /></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}
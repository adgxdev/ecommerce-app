"use client";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";
import { ChevronDown, ShoppingCart } from "lucide-react";
import React from "react";

const DigitalProductsPage: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light text-text-light">
        <Navbar />
        <main className="container mx-auto flex-1 px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <aside className="col-span-1">
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
            </aside>

            {/* Product Grid */}
            <section className="col-span-1 lg:col-span-3">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-border-light pb-4 md:flex-row md:items-center">
                <h1 className="text-2xl font-bold">Digital Products</h1>
                <div className="flex items-center gap-2">
                <label className="text-sm text-text-secondary-light" htmlFor="sort">
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

            {/* Product Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[
                {
                    title: "Advanced Python Scraper",
                    desc: "A powerful web scraping script.",
                    price: "$49.99",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Gc0h1hHdgWjO63Ep6sU3gg6M2KWyehtmjkJPZY8x7fxP9QgprbDcXRxvQGGx0IhyPmcx3iEecsoBzWAGqQlimPwZX1GtQX2S-CgTgrKpTYNvJJ8z5cQU1KictVGlq8iHh0NCtL3KB_9eCaBOh7EtGhc1mmwN0cY4QBhLMAW7uXnYBW9NOY5p2jpD5pLb17RL7fbH7mW5oNAzDnT1jVE7H37kCc10irLozKEvO4O5AjGgY-1XcMhT-XFVfmm0m0FpHhgaj7oNqQU",
                },
                {
                    title: "QuantumAI Toolkit",
                    desc: "Machine learning model library.",
                    price: "$199.00",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcbSwp6Nv0I7G78Rte5XQKZs29m1d60wXuHFzeBp7VN5SNEYhKIfXrg12wwbO2GCIgL15KFDVMyFTMMcvDjFQ8SBOtm3uwenI4InICVt8ANDPr2uj9BzUpZVcY1dSTN0PEfr8SHPKsY2k97L_a2oB14HeANKlScqSujaqTwGUSl1jv4vgkTdGlw_Nkcc4twSxYZT8Ar37D3ahkDW0zKbP69rsB7ju-dAATQRIox2kQnM90n1kJLzXBIQF8CDg6IijaTTf2Th6FQ",
                },
                {
                    title: "SaaS Startup Website",
                    desc: "Complete landing page template.",
                    price: "$79.00",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJmPu9g2U01erXAjQLF-k8XPZM0WmGLbyeOu9hbfWgCRQ2PjJxkTDOqHmAZSbCiExVv2OCCX6E8kBTARTejKmwMV8VlyqMS5ul-s113ZYZlzO3QPYUD4NFzqpRK-cxHGT0mbnzGJqa1DfErJOkzAezIYq6ig-loQambIyySktElaotts7_W3mNiWW2LcKnWZ5878rU9wSr35vkVV_6lk5fw2iqBcH9nUHbnjuyBOLPY0huW7WG9Z98c7bmqhSm6yY_bASVKpYQ0I",
                },
                {
                    title: "React Ui Component Kit",
                    desc: "50+ accessible components.",
                    price: "$120.00",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABd0DQvwk1DOFWvDKpkVTyCxTwrDx8LVImS_5eRgLcXNo9wugydHum8tjc4DkNP44oQzBBETHPYybPNHmnJn4EwwZlN81IBzxszqB0UTtRrkJX_pe_qu2y-OqMEEcpy7C--Gczzi0_IfPoq2LolzI7JXlBDnrzY3v7CVIcvrejHyRICHE7A7NIKIYA6oCOWtgrTIcCoidW3ctou82RkRT522lK2KRczRUKoiRPJ9_pyZw4xJ81ATJgq8ntv9fSIWIffQfpc3c1f88",
                },
                {
                    title: "Full-Stack Developer Course",
                    desc: "20 hours of hands-on tutorials.",
                    price: "$249.00",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1KFvXs0VomoKcCdFONNVBt5clYogC_kGKv9c-y2Q94AirD11ylZjJauOnh_VfYJVNYBajnWHsDi_nw_szF9QrsZXRfsiGd8LzH41ywH8ZFJ_psCYtgs0b85sovjj5TT7t4EK1yV5YfKIavoWiJKXt9SSTkb-3zdDCmHRgSHOeGWqRrP37Os5T42QQ0kGAZgJB35wddhFT8rjxv-whYUqrF1AOU2i0Jdozo-V18m3TDwa8tGopI6rMTaU0RYi0O_GxYcxgQpwwYwo",
                },
                {
                    title: "REST API for Geolocation",
                    desc: "Fast and reliable IP-to-location API.",
                    price: "$15/mo",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQG9gsXSMPciye6f8WwU7c8clY2AIn8FS3VIjDe9HmTurv8qQHesNuef1VMC1hJdvA0AzGC1xlMlqpE9XZCUSPG-KNuMY5fAooEdRCHoVB71s3yNfdIJe3T-OjXXceW5n8KDx0I7Lw-PC6JqzkxhCqI8MYviyu66bh5QlHklhuR_dNwfsX-3PvOGV_W_leR3WrXof4hBz5yTtOiiBRK8niE0A3u5dfckCh0aFoWmtlw4BvWVlsUUdDRMMIFSv4_CeE6uJYlyyT0U",
                },
                ].map((product, idx) => (
                <div
                    key={idx}
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
                    <p className="mt-1 text-sm text-text-secondary-light">{product.desc}</p>
                    <p className="mt-4 text-lg font-bold text-primary">{product.price}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <button className="flex h-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                        Preview
                        </button>
                        <button className="flex h-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                        Live Demo
                        </button>
                    </div>
                    <button className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                        <span className="material-symbols-outlined text-xl"><ShoppingCart className="h-5 w-5" /></span>
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
        <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
};

export default DigitalProductsPage;
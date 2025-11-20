"use client";

import { Earth, LayoutGrid, Waypoints, Bot, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function FeaturedCategories() {
  const categories = [
    { icon: Earth, label: "Websites", slug: "websites", },
    { icon: LayoutGrid, label: "Apps", slug: "apps", },
    { icon: Waypoints, label: "APIs", slug: "apis", },
    { icon: Bot, label: "AI Tools", slug: "ai-tools", },
    { icon: GraduationCap, label: "Courses", slug: "courses", },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-5 md:mb-10">Featured Categories</h2>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-2 md:gap-6">
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.slug}
              className="group flex flex-col items-center gap-1 md:gap-4 rounded-xl border border-gray-200 p-0 md:p-6 pb-1 bg-background-light 
              hover:shadow-xl hover:border-primary dark:hover:border-primary
              transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="w-full md:w-auto bg-primary/10 p-8 md:p-4 rounded-lg flex justify-center items-center">
                <Icon className="w-8 h-8 md:w-8 md:h-8 text-primary" />
              </div>

              <h3 className="text-sm md:text-lg font-bold">{item.label}</h3>
              <Link href={`/marketplace/${item.slug}`} className="absolute inset-0"></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
"use client";

import { Earth, LayoutGrid, Waypoints, Bot, GraduationCap } from "lucide-react";

export default function FeaturedCategories() {
  const categories = [
    { icon: Earth, label: "Websites" },
    { icon: LayoutGrid, label: "Apps" },
    { icon: Waypoints, label: "APIs" },
    { icon: Bot, label: "AI Tools" },
    { icon: GraduationCap, label: "Courses" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 p-6 bg-background-light 
              hover:shadow-xl hover:border-primary dark:hover:border-primary
              transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <Icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-lg font-bold">{item.label}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
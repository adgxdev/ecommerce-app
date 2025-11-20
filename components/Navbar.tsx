import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo + Nav links */}
          <div className="flex items-center gap-8">
            <Link href={'/'} className="flex items-center gap-2 text-text-light-primary">
              <Image src={'/logo.png'} className="h-6 w-22" alt="" height={200} width={300} />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="/categories/websites">
                Websites
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="/categories/apps">
                Apps
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="/categories/apis">
                APIs
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="/categories/ai-tools">
                AI Tools
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="/categories/courses">
                Courses
              </Link>
            </nav>
          </div>
          {/* Center: Search */}
          <div className="hidden flex-1 md:flex justify-center px-8">
            <label className="relative w-full max-w-lg">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-light-secondary">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:ring-primary outline-none placeholder:text-text-light-secondary"
              />
            </label>
          </div>

          {/* Right: Icons + Buttons */}
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href={"/cart"} className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">
                <ShoppingCart />
              </span>
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                3
              </span> 
            </Link>

            <Link href={"/login"} className="hidden md:flex min-w-[84px] items-center justify-center rounded-lg h-12 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
              <span className="truncate">Login / Sign Up</span>
            </Link>

            <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined"><Menu className="h-5 w-5" /></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
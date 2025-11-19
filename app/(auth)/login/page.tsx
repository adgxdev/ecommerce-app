"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="font-display bg-background-light text-slate-800 min-h-screen flex flex-col">

      <Navbar />

      <main className="flex flex-1 items-center justify-center py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-md p-6">
          <div className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#0c0c1d]">
                Log In to Di-Boss
              </h1>
              <p className="mt-2 text-base text-slate-500">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5">
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-[#0c0c1d]">
                  Email or Username
                </p>
                <input
                  type="text"
                  placeholder="Enter your email or username"
                  className="form-input h-12 rounded-2xl border border-slate-300 bg-background-light p-3 text-base text-[#0c0c1d] placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-[#0c0c1d]">
                  Password
                </p>
                <div className="relative flex w-full items-stretch">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="form-input h-12 flex-1 rounded-l-2xl border border-r-0 border-slate-300 bg-background-light p-3 text-base text-[#0c0c1d] placeholder:text-slate-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex items-center justify-center rounded-r-2xl border border-l-0 border-slate-300 bg-slate-50 px-3 text-slate-500 hover:bg-slate-100"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </label>

              <div className="flex justify-end">
                <a className="text-sm font-medium text-primary underline-offset-4 hover:underline" href="#">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-primary text-base font-bold text-white transition-all hover:bg-primary/90"
              >
                <span className="truncate">Login</span>
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-300"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-800 hover:bg-slate-50">
                <span>Google</span>
              </button>

              <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-800 hover:bg-slate-50">
                <span>Facebook</span>
              </button>
            </div>

            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <a className="font-medium text-primary underline-offset-4 hover:underline" href="/signup">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}
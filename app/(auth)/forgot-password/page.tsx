import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="font-display bg-background-light text-slate-800 min-h-screen flex flex-col">
      <Navbar />

      <main className="grow flex items-center justify-center py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200/80">
            {/* Page Heading */}
            <div className="flex flex-col gap-2 text-center mb-8">
              <h1 className="text-slate-900 text-3xl font-black leading-tight">
                Reset Your Password
              </h1>
              <p className="text-slate-500">
                Enter your registered email below, and we’ll send you a reset link.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium pb-2">
                  Email Address
                </label>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="" />
                  </span>

                  <input
                    id="email"
                    type="email"
                    required
                    className="form-input w-full rounded-2xl h-14 pl-12 pr-4 py-3 
                    border border-slate-300 
                    bg-background-light text-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-linear-to-r 
                  from-brand-purple to-brand-blue text-white font-bold 
                  hover:opacity-90 transition"
                >
                  Send Reset Link
                </button>
              </div>
            </form>

            {/* Back to Login */}
            <div className="pt-6 text-center">
              <p className="text-sm text-slate-500">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}
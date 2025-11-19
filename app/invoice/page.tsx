import { Download, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InvoicePage() {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark font-display">
      <div className="flex flex-col min-h-screen">
        {/* Top Nav */}
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700/50 px-4 sm:px-10 py-3">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                <div className="size-6 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold">Di-Boss</h2>
              </div>

              <div className="flex gap-8">
                <Link
                  href="/marketplace"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Back to Store
                </Link>
              </div>
            </header>
          </div>
        </div>

        {/* Main */}
        <main className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="w-full bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-sm p-6 sm:p-8 md:p-12 space-y-10">
              {/* Heading */}
              <div className="flex flex-wrap justify-between items-start gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-black text-gray-900 dark:text-white">
                    Purchase Confirmed
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Thank you for your order. Here are the details of your
                    transaction.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
                    <span className="material-symbols-outlined text-base">
                      <Download className="h-3 w-3" />
                    </span>
                    Download PDF
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                    <span className="material-symbols-outlined text-base">
                      <Printer className="h-3 w-3" />
                    </span>
                    Print
                  </button>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-200 dark:border-gray-700/50 pt-8">
                <div>
                  <p className="text-sm text-gray-500">Billed To:</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Alex Doe
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Date of Issue:</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    October 26, 2024
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Invoice Number:</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    INV-2024-1084
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Transaction ID:</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    ch_3PzQx8aB9fG...
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700/50">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-800 dark:text-gray-200">
                        Product Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-800 dark:text-gray-200 hidden md:table-cell">
                        Description
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-800 dark:text-gray-200">
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                    <tr>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-200">
                        AI Content Generator
                      </td>
                      <td className="px-4 py-4 text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        AI Tool License
                      </td>
                      <td className="px-4 py-4 text-right text-gray-500 dark:text-gray-400">
                        $149.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Payment + Breakdown */}
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    Payment Details
                  </h3>

                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 p-3">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPmU1xufs_Qa0OqlevHbH_yxJSxqb1CtoiWcRTRzGwP7V-i6lCkcIog_MVZl07A7PcW2GrkoW7l2fVKLfS2ct_rhhH5iNepN48cwzswM0SmZIUPSY3O_p7-skfduuNhR5xFd5ullyD1XsC2ngDLtXQTBwr3IRyXzDyswEVo40pe6w1pVIwe_iQBknXa-gDFvUbVP-ENV8KdqFqAszUsQ5lDdoi2MUqsKmLaIMK8QiLVaZu7MdUZLuAy4OSxPYYi27izqvhVJ14LuM"
                      alt="Visa"
                      width={36}
                      height={12}
                      className="h-6 w-auto object-contain rounded-sm"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Visa ending in 4242
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Status:{" "}
                        <span className="font-medium text-green-600 dark:text-green-400">
                          Completed
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:max-w-xs space-y-2">
                  <div className="flex justify-between py-1">
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      $149.00
                    </p>
                  </div>

                  <div className="flex justify-between py-1">
                    <p className="text-sm text-gray-500">Taxes & Fees</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      $12.50
                    </p>
                  </div>

                  <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-700/50 mt-2">
                    <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                      Total
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      $161.50
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-4 sm:px-8 md:px-20 lg:px-40 flex justify-center py-5 mt-10">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700/50 px-4 sm:px-10 py-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 Di-Boss. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  Help Center
                </a>
                <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
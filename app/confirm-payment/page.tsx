import { Bot, Code, Lock } from "lucide-react";

export default function PaymentConfirmation() {
  return (
    <div className="font-display relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        {/* Header */}
        <header className="flex w-full items-center justify-center px-4 py-5 sm:px-8 md:px-10 lg:px-20">
          <div className="flex w-full max-w-5xl items-center justify-between">
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              {/* Logo */}
              <div className="h-6 w-6 text-primary">
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
              <h2 className="text-xl font-bold">Di-Boss</h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-gray-600 dark:text-gray-300">
                <Lock className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Secure Checkout
              </span>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
          <div className="w-full max-w-2xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Final Confirmation
              </h1>
            </div>

            {/* Card */}
            <div className="rounded-xl border border-gray-200/50 bg-white/50 dark:border-gray-700/50 dark:bg-background-dark/50 shadow-lg backdrop-blur-sm">
              <div className="p-6 sm:p-8 space-y-6">

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Payment Method
                  </h3>

                  <div className="mt-4 flex items-center justify-between rounded-lg bg-background-light dark:bg-background-dark p-4">
                    <div className="flex items-center gap-4">

                      {/* Card Logo */}
                      <div
                        className="bg-center bg-no-repeat aspect-video bg-contain h-6 w-10 shrink-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDVGwK3kZnOMmPjPFyTd7BoDEGGHT2eLY9FgnzxEkMM9f22bfBzHSaitIDLgjjTwCV_TI556ZnAuJsOJT6Hklp373C-bHd3Mk1qV6pzsfexHkSmmk2Es8P3PGtAKbASV5ZzQj_PaMm4g3e7c3Xs_7kEb4agorRkXt6LrkHTW9zv5JRYdAaSyqnIM7hI06YPgDpMMCPGNXBov8ALUnkhvBx6ZkgzbAbauSloH8m7xmwHADXWIZzwNrFhQKlCC2ca_Ix9bp2ODrsCCE")',
                        }}
                      ></div>

                      <div className="flex flex-col">
                        <p className="text-base font-medium text-gray-800 dark:text-gray-100">
                          Visa ending in •••• 1234
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Expires 08/26
                        </p>
                      </div>
                    </div>

                    <button className="text-sm font-bold text-primary hover:text-primary/80">
                      Change
                    </button>
                  </div>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                {/* Order Summary */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Order Summary
                  </h3>

                  <div className="mt-4 space-y-3">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                          <span className="material-symbols-outlined text-xl">
                            <Code className="h-4 w-4" />
                          </span>
                        </div>
                        <p className="text-base text-gray-700 dark:text-gray-200">
                          Quantum API Script
                        </p>
                      </div>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-100">
                        $49.99
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                          <span className="material-symbols-outlined text-xl">
                            <Bot />
                          </span>
                        </div>
                        <p className="text-base text-gray-700 dark:text-gray-200">
                          AI Content Generator Tool
                        </p>
                      </div>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-100">
                        $99.00
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                {/* Totals */}
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$148.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes &amp; Fees</span>
                    <span>$12.50</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>$161.49</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Confirm */}
              <div className="border-t border-gray-200/50 dark:border-gray-700/50 bg-background-light/50 dark:bg-background-dark/30 p-6 sm:p-8 rounded-b-xl">
                <div className="flex flex-col items-center gap-4">
                  <button className="flex w-full h-12 items-center justify-center rounded-lg bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/40">
                    Confirm &amp; Pay $161.49
                  </button>
                  <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    Cancel and return to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 px-4 sm:px-8">
          <div className="mx-auto max-w-5xl flex justify-center gap-6">
            <a className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              Terms of Service
            </a>
            <a className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              Privacy Policy
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
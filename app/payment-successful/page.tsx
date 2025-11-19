import { Check, Download } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="bg-background-light font-display text-text-light-primary min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap px-4 py-5 sm:px-6 max-w-[960px] w-full mx-auto">
        <div className="flex items-center gap-4 text-text-light-primary">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-[-0.015em]">Di-Boss</h2>
        </div>

        <a
          href="#"
          className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20"
        >
          My Account
        </a>
      </header>

      {/* Main Content */}
      <main className="grow py-12 sm:py-16 lg:py-20 flex justify-center px-4 sm:px-8 md:px-12">
        <div className="flex flex-col max-w-3xl items-center w-full">
          <div className="flex flex-col items-center justify-center space-y-8 rounded-xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.05)] sm:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary-accent">
              <span className="material-symbols-outlined text-5xl text-white"><Check className="h-10 w-10" /></span>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-4xl font-black tracking-[-0.033em]">
                Payment Successful!
              </p>
              <p className="max-w-md text-text-light-secondary dark:text-text-dark-secondary">
                Thank you, Alex! Your order is complete and a receipt has been sent to your email.
              </p>
            </div>

            {/* Order Info */}
            <div className="w-full max-w-lg bg-background-light rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-[auto_1fr] gap-x-6">
                <div className="col-span-2 grid grid-cols-subgrid border-b border-b-black/10 py-4">
                  <p className="text-sm text-text-light-secondary">
                    Order Confirmation
                  </p>
                  <p className="text-right text-sm font-medium">#DB123456789</p>
                </div>

                <div className="col-span-2 grid grid-cols-subgrid py-4">
                  <p className="text-sm text-text-light-secondary">
                    Receipt Sent To
                  </p>
                  <p className="text-right text-sm font-medium">
                    alex.morgan@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* File Info */}
            <div className="w-full max-w-lg text-center">
              <p className="pb-3 pt-1 text-base">
                Your files are now ready for download. You can access them anytime from your purchases page.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full max-w-lg flex-col sm:flex-row gap-4 pt-4">
              <button className="flex justify-center items-center gap-2 w-full h-12 rounded-lg px-6 bg-linear-to-r from-primary to-secondary-accent text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition">
                <span className="material-symbols-outlined"><Download className="h-5 w-5" /></span>
                <span>Download Files</span>
              </button>

              <a
                href="#"
                className="flex w-full h-12 items-center justify-center rounded-lg px-6 bg-primary/10 text-primary font-bold hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30"
              >
                Go to My Purchases
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-text-light-secondary dark:text-text-dark-secondary py-8">
        <div className="flex items-center justify-center gap-6">
          <a className="hover:text-primary dark:hover:text-primary" href="#">Help & Support</a>
          <a className="hover:text-primary dark:hover:text-primary" href="#">Contact Us</a>
        </div>
        <p className="mt-4">© 2024 Di-Boss. All rights reserved.</p>
      </footer>
    </div>
  );
}
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";
import { Bitcoin, CreditCard } from "lucide-react";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function CheckoutPage() {
  return (
    <div
      className={`${spaceGrotesk.className} bg-background-light text-border-dark min-h-screen flex flex-col`}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* LEFT: PAYMENT METHODS */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-[#111827] text-4xl font-black mb-8">
              Checkout
            </h1>

            <h2 className="text-[#111827] text-2xl font-bold mb-4">
              Choose how you want to pay
            </h2>

            {/* Payment Methods */}
            <div className="flex flex-col gap-4">
              {/* Method 1 */}
              <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-white p-4 shadow-sm has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/20">
                <input
                  type="radio"
                  name="payment-method"
                  defaultChecked
                  className="h-5 w-5 border-2 border-[#d0cee8] checked:border-primary checked:bg-(--radio-dot-svg)"
                />
                <div className="flex grow items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    <CreditCard className="" />
                  </span>
                  <div>
                    <p className="font-medium text-[#111827]">
                      Credit/Debit Card
                    </p>
                    <p className="text-sm text-gray-500">
                      Pay with Visa, Mastercard, and more.
                    </p>
                  </div>
                </div>
              </label>

              {/* Method 2 */}
              <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-white p-4 shadow-sm has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/20">
                <input type="radio" name="payment-method" className="h-5 w-5" />
                <div className="flex grow items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    <Bitcoin className="" />
                  </span>
                  <div>
                    <p className="font-medium">Cryptocurrency</p>
                    <p className="text-sm text-gray-500">
                      Pay with Bitcoin, Ethereum, and others.
                    </p>
                  </div>
                </div>
              </label>

              {/* Flutterwave */}
              <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-white p-4 shadow-sm has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/20">
                <input type="radio" name="payment-method" className="h-5 w-5" />
                <div className="flex grow items-center gap-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9doYo4Z5Rp_BQoyq4jf1rOHVE1wBaIINNMXTX10Ksg44xDor7US-cJHWVv3T6c27EG9Emt7qHPE72-ofXJw05CtWm5RjhaC4Voxwrto0VyGIyC0_cGQDji5jY_Ac936LKAg-r8YrWWS4ZgT2dxL6FrovasrEhnWtzax6cFCdm6EdGDA0hWITzjFOFXA9Et4C1e0iMyAbOC30Ey4jXc9VTmKEH1FG3qPmD_Bo5ZORpBexvTuDYy8U2eSgGG7H5vk_YSpZHCXFuhCA"
                    width={40}
                    height={40}
                    alt="Flutterwave"
                    className="rounded object-contain"
                  />
                  <div>
                    <p className="font-medium">Flutterwave</p>
                    <p className="text-sm text-gray-500">
                      Secure payments for African businesses.
                    </p>
                  </div>
                </div>
              </label>

              {/* Paystack */}
              <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-white p-4 shadow-sm has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/20">
                <input type="radio" name="payment-method" className="h-5 w-5" />
                <div className="flex grow items-center gap-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI_xkR9l7sDTziamKEJ--qBbOLfOgXewJCchyYcU9TAj40MIOxidTVbRCrP0Acp8ynZXTNcZjsFjjlU0Z9qygcIcV_G7F4X4w_3r93i9quTeWecEk_tZL6hRQyxbCzsJHUQu5xaAahVe384XJ0wwECzDG2uPwX7LrFWABsTuWV5C3mG8nkS4XsLYVV2oC-jZvhVO95kOisHNiIy9yOWj7cfPtCKGxjiiMZgBsI12iaY_fvf7tLYcLzGPOsTqcOWP4Fuz8VsRI5A08"
                    width={40}
                    height={40}
                    alt="Paystack"
                    className="object-contain"
                  />
                  <div>
                    <p className="font-medium">Paystack</p>
                    <p className="text-sm text-gray-500">
                      Modern payments for Africa.
                    </p>
                  </div>
                </div>
              </label>
            </div>

            {/* PAY BUTTON */}
            <div className="mt-8">
              <button className="w-full h-14 rounded-xl bg-primary text-white text-lg font-bold">
                Pay Now - $98.00
              </button>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 rounded-xl bg-white p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4YEzkQrU9WWnyuvvPN0gpcEmQOf_Ji6k924s48nnZ1aLnv3iKcB0218Gx_mvDK03zzmw3tXiaXHSMtGDI7ITK3aN4VD1nXyao3eCXaTcq5ycd-qKJeOGQMVesIm8QMx7IDpJlfN9Z_NDh0Gp3g2upZVAOgwNyRfccbahJTDvHD96CKHXU1LxH-I8svlNRuKt1zPk8fBj2VWTmZtcyCKfwWH3GYBRY3wLYaKQ4oMz6qn1MCyLwvl2llLZVJ3k4qCAvYcZgdiaDArA"
                    width={64}
                    height={64}
                    alt="AI Tool"
                    className="rounded-lg object-cover"
                  />
                  <div className="grow">
                    <p className="font-medium">AI Content Generator</p>
                    <p className="text-sm text-gray-500">
                      AI Tool
                    </p>
                  </div>
                  <p className="font-bold">$49.00</p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmTgTnlXuSiGs0aairXggF95lZ_ccsq2xlGDsHA0e0VvkiW16J9s9WN-XJveK7ClekM7aj6DZ7aiqK_A5Gby4r99w_3KfzaLMrKqTVUtEKwXlROFMXJp-uXE1D6LgY6vQ4uasCeu7eEKDpwRSxfDSkPUA4M3scG2Zg104qm_AkvTMIvM4CBPnK9smup72ZXLu83Bj4mLwnqZSfw9rs-Ply0U-k6PjyTUXDK9PLwjUSZo_pCDLvQ7yyyxKUQoGMN158vCUs9woANtI"
                    width={64}
                    height={64}
                    alt="Script"
                    className="rounded-lg object-cover"
                  />
                  <div className="grow">
                    <p className="font-medium">Social Media API</p>
                    <p className="text-sm text-gray-500">
                      Script
                    </p>
                  </div>
                  <p className="font-bold">$49.00</p>
                </div>
              </div>

              <div className="my-6 h-px bg-border-light"></div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$98.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-500">-$0.00</span>
                </div>
              </div>

              <div className="my-6 h-px bg-border-light"></div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$98.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
        <Footer />
      {/* Floating WhatsApp Button */}
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}
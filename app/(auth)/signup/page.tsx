import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";

export default function SignUpPage() {
  return (
    <>
      <Navbar />

      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">

          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-200">
            <div className="text-center">
              <h1 className="text-3xl font-bold pb-2">Create Your Account</h1>
              <p className="text-gray-500 text-sm">
                Join Di-Boss to access a world of digital assets.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <Input label="Full Name" id="full-name" type="text" placeholder="Enter your full name" />
              <Input label="Email Address" id="email" type="email" placeholder="you@example.com" />
              <Input label="Password" id="password" type="password" placeholder="8+ characters" />
              <Input label="Confirm Password" id="confirm-password" type="password" placeholder="Re-enter your password" />

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="h-4 w-4 rounded-full text-primary" />
                <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
                  I agree to the <a className="text-primary font-medium" href="#">Terms</a> and{" "}
                  <a className="text-primary font-medium" href="#">Privacy Policy</a>.
                </label>
              </div>

              <button type="submit" className="w-full py-3 rounded-2xl bg-linear-to-r from-[#6C63FF] to-[#3A86FF] text-white font-bold">
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account? <a href="/login" className="text-primary font-medium">Log In</a>
              </p>
            </form>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </>
  );
}

interface InputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}

function Input({ label, id, type, placeholder }: InputProps) {
  return (
    <label className="flex flex-col">
      <p className="text-sm font-medium pb-2">{label}</p>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-12 px-4 rounded-2xl border border-gray-300 bg-background-light focus:ring-2 focus:ring-primary/50"
      />
    </label>
  );
}
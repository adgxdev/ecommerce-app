import { Component } from "lucide-react";
import Link from "next/link";

export default function CTAAndFooter() {
  return (
    <>
      {/* Join Our Community Section */}
      <section className="py-16">
        <div className="bg-linear-to-r from-secondary to-primary rounded-xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Join Our Community</h2>
          <p className="max-w-xl mx-auto mb-8">
            Get the latest product updates, special offers, and digital business tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="md:flex-1 h-14 px-5 rounded-lg text-text-light-primary border-none focus:ring-2 focus:ring-white bg-white outline-none"
            />
            <button
              type="submit"
              className="h-14 px-8 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Get the App Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-text-light-primary mb-4">
            Get the Di-Boss App
          </h3>
          <p className="text-text-light-secondary mb-6">
            Access the marketplace on the go.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <div>
                <span className="block text-xs text-text-light-secondary">
                  Download on
                </span>
                <span className="block font-bold text-sm text-text-light-primary">
                  Windows / Mac
                </span>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <div>
                <span className="block text-xs text-text-light-secondary">
                  Get it on
                </span>
                <span className="block font-bold text-sm text-text-light-primary">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-text-light-primary mb-4">
                <span className="material-symbols-outlined text-primary text-3xl"><Component /></span>
                <h2 className="text-xl font-bold">Di-Boss</h2>
              </div>
              <p className="text-sm text-text-light-secondary">
                The marketplace for your next digital venture.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-text-light-secondary">
                <li><a href="#" className="hover:text-primary">Websites</a></li>
                <li><a href="#" className="hover:text-primary">Apps</a></li>
                <li><a href="#" className="hover:text-primary">APIs</a></li>
                <li><a href="#" className="hover:text-primary">AI Tools</a></li>
                <li><a href="#" className="hover:text-primary">Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-text-light-secondary">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-text-light-secondary">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-text-light-secondary hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.11,9.75 4.26,10.54C3.54,10.52 2.87,10.31 2.3,10V10.03C2.3,12.11 3.81,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-text-light-secondary hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 5.58,20 10,20C10.74,20 11.47,19.92 12.19,19.77C12.07,19.54 12,19.27 12,19C12,18.78 12.03,18.57 12.08,18.36C11.4,18.5 10.7,18.59 10,18.59C6.41,18.59 3.41,15.59 3.41,12C3.41,8.41 6.41,5.41 10,5.41C13.59,5.41 16.59,8.41 16.59,12C16.59,14.12 15.5,15.97 13.91,17.06C14.73,17.03 15.5,16.79 16.2,16.39C16.43,15.82 16.59,15.22 16.59,14.59C16.59,13.16 15.44,12 14,12C12.56,12 11.41,13.16 11.41,14.59C11.41,15.41 11.83,16.14 12.5,16.59C12.18,17.47 11.6,18.23 10.88,18.78C11.23,18.88 11.59,18.94 12,18.94C12.35,18.94 12.69,18.9 13.03,18.82C13.2,19.21 13.43,19.57 13.71,19.9C13.17,20.04 12.59,20.11 12,20.11C11.9,20.11 11.8,20.11 11.7,20.11C11.47,21.16 10.79,22 10,22C8.9,22 8,21.1 8,20C8,18.9 8.9,18 10,18C10.74,18 11.39,18.42 11.72,19C12.44,18.53 13.06,17.86 13.5,17.06C13.5,16.89 13.41,16.72 13.41,16.5C13.41,15.03 14.53,13.91 16,13.91C17.47,13.91 18.59,15.03 18.59,16.5C18.59,17.27 18.26,17.97 17.72,18.47C18.54,19.16 19.16,20.04 19.5,21C20.68,20.24 21.59,19.12 22,17.81C21.94,17.81 21.88,17.81 21.81,17.81C19.7,17.81 18,16.11 18,14C18,11.79 19.79,10 22,10C22.2,10 22.39,10 22.59,10.03C22.86,8.77 23,7.44 23,6C23,5.85 23,5.7 23,5.55C21.41,5.2 20.11,4 20.11,2C20.11,1.68 20.15,1.36 20.22,1.06C19.43,2.2 18.06,3 16.5,3C14.4,3 12.68,1.71 12.1,0.06C8.05,0.56 5,4.03 5,8.23C5,8.39 5,8.54 5.03,8.69C4.46,8.2 3.77,8 3,8C2.65,8 2.33,8.05 2.03,8.14C2.5,5.61 4.5,3.72 7.03,3.14C6.2,3.61 5.5,4.34 5.07,5.22C5.5,4.86 6.03,4.61 6.61,4.47C6.88,4.16 7.22,3.91 7.61,3.72C7.5,4.22 7.5,4.72 7.61,5.22C7.11,5.61 6.5,5.86 6,5.86C5.83,5.86 5.68,5.83 5.53,5.8C5.2,6.72 4.23,7.44 3.19,7.44C3.11,7.44 3.03,7.44 2.94,7.41C2.33,7.18 1.83,6.68 1.61,6.06C1.22,6.58 1,7.27 1,8C1,8.08 1,8.16 1,8.23C0.38,9.34 0,10.63 0,12C0,17.52 4.48,22 10,22C10.64,22 11.27,21.94 11.88,21.83C11.31,21.37 11,20.73 11,20C11,19.73 11.05,19.46 11.14,19.22C10.79,19.33 10.4,19.38 10,19.38C6.47,19.38 3.63,16.54 3.63,13C3.63,9.47 6.47,6.63 10,6.63C13.53,6.63 16.38,9.47 16.38,13C16.38,13.11 16.38,13.22 16.35,13.33C17.3,12.56 18.06,11.38 18.06,10C18.06,7.25 15.81,5 13.06,5C10.31,5 8.06,7.25 8.06,10C8.06,12.75 10.31,15 13.06,15C13.28,15 13.5,15 13.72,14.97C13.5,15.55 13.38,16.16 13.38,16.77C13.38,17.61 13.62,18.41 14.06,19.1C13.41,19.28 12.72,19.38 12,19.38L12,2A10,10 0 0,0 2,12Z"></path></svg>
                </Link>
                <Link href="#" className="text-text-light-secondary hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,6 7.78,5.22 6.88,5.22A1.68,1.68 0 0,0 5.2,6.88C5.2,7.78 6,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-text-light-secondary">
            <p>© 2024 Di-Boss. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
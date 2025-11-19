import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-background-lightborder-t border-border-light border-t">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 lg:px-8">
        {/* Company */}
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-text-secondary-light hover:text-primary"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-text-secondary-light hover:text-primary"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-text-secondary-light hover:text-primary"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-text-secondary-light hover:text-primary"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-text-secondary-light hover:text-primary"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-text-secondary-light hover:text-primary"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold">Connect</h4>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-text-secondary-light hover:text-primary"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-text-secondary-light hover:text-primary"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.285 2.866 7.91 6.738 9.143.49.09.668-.212.668-.472 0-.232-.008-.847-.013-1.662-2.782.604-3.37-1.34-3.37-1.34-.446-1.134-1.09-1.436-1.09-1.436-.89-.608.068-.596.068-.596.985.068 1.503 1.01 1.503 1.01.875 1.498 2.296 1.065 2.854.815.09-.633.342-1.065.62-1.31-2.176-.247-4.463-1.087-4.463-4.832 0-1.068.38-1.942 1.01-2.626-.1-.248-.438-1.242.096-2.588 0 0 .823-.264 2.697 1.003A9.422 9.422 0 0112 6.82c.85.004 1.705.115 2.504.336 1.874-1.267 2.697-1.003 2.697-1.003.535 1.346.2 2.34.1 2.588.63.684 1.01 1.558 1.01 2.626 0 3.756-2.29 4.58-4.475 4.824.35.302.662.898.662 1.81v2.692c0 .26.178.562.674.472C19.137 19.91 22 16.285 22 12c0-5.523-4.477-10-10-10z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border-light">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-text-secondary-light lg:px-8">
          © 2024 Di-Boss. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
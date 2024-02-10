import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Toggle button for mobile menu */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Navigation links for larger screens */}
                {[
                  "Swap",
                  "Rewards",
                  "Products",
                  "Launchpad",
                  "Leaderboard",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current={item === "Swap" ? "page" : undefined}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Additional actions or links */}
            {["About", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current={item === "swap" ? "page" : undefined}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="text-white px-8 py-2 rounded-md text-sm font-medium"
              style={{
                background: "var(--gold-gradient-color)",
              }}
            >
              Connect Wallet
            </a>
            <a
              href="#"
              className="text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              En
            </a>
            <span className="text-white">|</span>
            <a className="text-white px-4 py-2 rounded-md text-sm font-medium">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.40845 18H24.1084C24.5759 18.0014 25.0289 17.838 25.3878 17.5385C25.7468 17.2391 25.9886 16.8227 26.0709 16.3625L27.5959 8H6.59595"
                  stroke="url(#paint0_linear_10_809)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.40845 18H24.1084C24.5759 18.0014 25.0289 17.838 25.3878 17.5385C25.7468 17.2391 25.9886 16.8227 26.0709 16.3625L27.5959 8H6.59595"
                  stroke="#D1D2D7"
                  stroke-opacity="0.3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.5959 28C24.9767 28 26.0959 26.8807 26.0959 25.5C26.0959 24.1193 24.9767 23 23.5959 23C22.2152 23 21.0959 24.1193 21.0959 25.5C21.0959 26.8807 22.2152 28 23.5959 28Z"
                  stroke="#D5B690"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5959 28C11.9767 28 13.0959 26.8807 13.0959 25.5C13.0959 24.1193 11.9767 23 10.5959 23C9.21524 23 8.09595 24.1193 8.09595 25.5C8.09595 26.8807 9.21524 28 10.5959 28Z"
                  stroke="url(#paint1_linear_10_809)"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5959 28C11.9767 28 13.0959 26.8807 13.0959 25.5C13.0959 24.1193 11.9767 23 10.5959 23C9.21524 23 8.09595 24.1193 8.09595 25.5C8.09595 26.8807 9.21524 28 10.5959 28Z"
                  stroke="#D1D2D7"
                  stroke-opacity="0.5"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.5959 23H9.32095L5.83345 3.825C5.79264 3.59537 5.67286 3.38722 5.49481 3.23657C5.31677 3.08592 5.09167 3.00223 4.85845 3H2.59595"
                  stroke="url(#paint2_linear_10_809)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.5959 23H9.32095L5.83345 3.825C5.79264 3.59537 5.67286 3.38722 5.49481 3.23657C5.31677 3.08592 5.09167 3.00223 4.85845 3H2.59595"
                  stroke="#AEAEAE"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_809"
                    x1="27.5959"
                    y1="18"
                    x2="21.884"
                    y2="8.65527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ECAF5A" />
                    <stop offset="1" stop-color="#89683D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_10_809"
                    x1="13.0959"
                    y1="28"
                    x2="9.98441"
                    y2="25.5759"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ECAF5A" />
                    <stop offset="1" stop-color="#89683D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_10_809"
                    x1="23.5959"
                    y1="23"
                    x2="11.0146"
                    y2="12.7084"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ECAF5A" />
                    <stop offset="1" stop-color="#89683D" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state. */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Mobile navigation links */}
          {["Swap", "Rewards", "Products", "Launchpad", "Leaderboard"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current={item === "Swap" ? "page" : undefined}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

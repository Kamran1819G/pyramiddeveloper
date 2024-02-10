import React from "react";
import CERTIK from "../assets/CERTIK.png";
import CoinMarketCap from "../assets/images/CoinMarket.png";
import Social from "../assets/images/Social.png";
import Support from "../assets/images/Support.png";

const Footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={CERTIK} className="h-14" alt="CERTIK Logo" />
            </a>
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="flex flex-col items-center mx-3">
                <a href="#" className="hover:underline">
                  <div className="flex flex-col items-center">
                    <img
                      src={CoinMarketCap}
                      alt="CoinMarketCap"
                      className="h-8"
                    />
                    <span className="text-xs text-gray-500 mt-1">
                      CoinMarketCap
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex flex-col items-center mx-3">
                <a href="#" className="hover:underline">
                  <div className="flex flex-col items-center">
                    <img src={Social} alt="Social" className="h-8" />
                    <span className="text-xs text-gray-500 mt-1">Social</span>
                  </div>
                </a>
              </li>
              <li className="flex flex-col items-center mx-3">
                <a href="#" className="hover:underline">
                  <div className="flex flex-col items-center">
                    <img src={Support} alt="Support" className="h-8" />
                    <span className="text-xs text-gray-500  mt-1">Support</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

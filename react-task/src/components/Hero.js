import React, { useState } from "react";
import BuyHedgePay from "../assets/images/BuyHedgePay.png";
import Share from "../assets/images/Share.png";
import PresentationChart from "../assets/images/PresentationChart.png";
import BuyWithTransak from "../assets/images/Up and Down Arrow.png";
import InterChange from "../assets/images/InterChange.png";
import QuestionMark from "../assets/images/Question.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [balance, setBalance] = useState("$0.92");
  const [nearPay, setNearPay] = useState("0.20115234 NEAR");
  const [thpayNear, setThpayNear] = useState("3409.2419 THPAY/NEAR");
  const [percentage, setPercentage] = useState("+76.7750%");
  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (event) => {
    setAgreed(event.target.checked);
  };

  return (
    <div className="container mt-24">
      <div id="bg-element"></div>
      <div className="mx-32 flex justify-around  text-white">
        <div className="w-1/3">
          <div className="border-gold rounded-lg p-5 w-80">
            <h1 className="text-3xl">
              <span className="font-bold">HPAY</span> |{" "}
              <span className="font-bold">Exchange</span>
            </h1>
            <div>
              <a
                href="#"
                className="flex items-center justify-between my-5 p-3 bg-slate-600 rounded-lg"
              >
                <img src={BuyHedgePay} className="h-6" alt="Buy HedgePay" />
                <h1 className="gradient-text">Buy HedgePay</h1>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
              <div className="my-3">
                <a
                  href="#"
                  className="flex items-center justify-between bg-slate-600 rounded-lg p-3 my-2"
                >
                  <img src={Share} className="h-6" alt="Share" />
                  <h1>Transfer Gateway</h1>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between bg-slate-600 rounded-lg p-3 my-2"
                >
                  <img
                    src={PresentationChart}
                    className="h-6"
                    alt="View Chart"
                  />
                  <h1>View Chart</h1>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between bg-slate-600 rounded-lg p-3 my-2"
                >
                  <img
                    src={BuyWithTransak}
                    className="h-6"
                    alt="Buy with Transak"
                  />
                  <h1>Buy with Transak</h1>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-4xl font-bold w-96">Aggregator DEX</h1>
          <p className="my-4 text-slate-300 text-lg w-96">
            HedgePay’s Aggregator DEX has the ability to track the best prices
            for the token you want on established Decentralized Exchanges. The
            HedgePay DEX will also provides you with the option to set limit
            orders, giving you the freedom hunt for the token you want at the
            price you want it
          </p>
          <div className="flex gap-12">
            <button
              className="text-white font-bold py-3 px-5 rounded-lg"
              style={{ background: "var(--gold-gradient-color)" }}
            >
              Buy HedgePay
            </button>
            <button className="border-gold text-white font-bold py-3 px-5 rounded-lg">
              View Chart
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <div className="p-4 border-gold rounded w-96">
            <div className="balance text-slate-300">
              Your Balance: {balance}
            </div>
            <div className="near-pay text-3xl font-bold">{nearPay}</div>
            <div className="my-2 flex justify-between text-slate-300">
              <span>You Pay</span>
              <span>{thpayNear}</span>
            </div>
            <select className="bg-black text-white font-bold w-full p-4 my-3 rounded-lg">
              <option
                value="BTC"
                className="test"
                data-thumbnail="https://www.cryptofonts.com/img/icons/btc.svg"
              >
                BTC
              </option>
              <option
                value="LTC"
                data-thumbnail="https://www.cryptofonts.com/img/icons/ltc.svg"
              >
                Litecoin
              </option>
              <option
                value="XRP"
                data-thumbnail="https://www.cryptofonts.com/img/icons/xrp.svg"
              >
                XRP
              </option>
              <option
                value="BCH"
                data-thumbnail="https://www.cryptofonts.com/img/icons/bch.svg"
              >
                Bitcoin Cash
              </option>
              <option
                value="TRX"
                data-thumbnail="https://www.cryptofonts.com/img/icons/trx.svg"
              >
                Tron
              </option>
              <option
                value="BNB"
                data-thumbnail="https://www.cryptofonts.com/img/icons/bnb.svg"
              >
                Binance Coin
              </option>
              <option
                value="DOGE"
                data-thumbnail="https://www.cryptofonts.com/img/icons/doge.svg"
              >
                Doge Coin
              </option>
            </select>
            <div className="flex justify-between">
              <img src={InterChange} alt="Interchange" className="h-8" />
              <div className="flex items-center">
                <span className="text-slate-300 text-xs">
                  Better by +76.7750%
                </span>
                <img src={QuestionMark} alt="Question Mark" className="h-8" />
              </div>
            </div>
            <select className="bg-black text-white font-bold w-full p-4 my-3 rounded-lg">
              <option
                value="BTC"
                className="test"
                data-thumbnail="https://www.cryptofonts.com/img/icons/btc.svg"
              >
                BTC
              </option>
              <option
                value="LTC"
                data-thumbnail="https://www.cryptofonts.com/img/icons/ltc.svg"
              >
                Litecoin
              </option>
              <option
                value="XRP"
                data-thumbnail="https://www.cryptofonts.com/img/icons/xrp.svg"
              >
                XRP
              </option>
              <option
                value="BCH"
                data-thumbnail="https://www.cryptofonts.com/img/icons/bch.svg"
              >
                Bitcoin Cash
              </option>
              <option
                value="TRX"
                data-thumbnail="https://www.cryptofonts.com/img/icons/trx.svg"
              >
                Tron
              </option>
              <option
                value="BNB"
                data-thumbnail="https://www.cryptofonts.com/img/icons/bnb.svg"
              >
                Binance Coin
              </option>
              <option
                value="DOGE"
                data-thumbnail="https://www.cryptofonts.com/img/icons/doge.svg"
              >
                Doge Coin
              </option>
            </select>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-2"
                checked={agreed}
                onChange={handleAgreementChange}
              />
              <label className="text-slate-300">
                I have read and agree with HedgePay Terms of Service. I have
                done my research to make sure I am legally able to purchase the
                token in my country of residence.
              </label>
            </div>
            <button className="my-3 bg-slate-400 w-full text-white font-bold py-2 px-4 rounded-lg">
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

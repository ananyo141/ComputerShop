import React from "react";

import mastercardlogo from "../../assets/mastercardlogo.png";

type Props = {
  onCheckout: CallableFunction;
};

const Card = ({ onCheckout }: Props) => {
  return (
    <div className="max-w-sm overflow-visible rounded bg-gray-800 p-5">
      <span className="block pb-3 text-xl font-medium text-gray-100">
        Card Details
      </span>
      <span className="text-xs text-gray-400">Card Type</span>
      <div className="mt-2 flex items-center justify-between overflow-visible">
        <div className="relative right-10 h-28 w-52 rounded bg-gray-500 py-2 px-4">
          <span className="text-lg font-medium italic text-gray-200 underline">
            VISA
          </span>
          <div className="flex items-center justify-between pt-4">
            <span className="text-xs font-medium text-gray-200">****</span>
            <span className="text-xs font-medium text-gray-200">****</span>
            <span className="text-xs font-medium text-gray-200">****</span>
            <span className="text-xs font-medium text-gray-200">****</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-200">John Doe</span>
            <span className="text-xs text-gray-200">12/28</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={mastercardlogo} width={40} className="relative right-5" />
          <span className="relative bottom-2 right-5 text-xs font-medium text-gray-200">
            mastercard.
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-3">
        <label className="text-xs text-gray-400">Name on Card</label>
        <input
          type="text"
          className="h-6 w-full border-b border-gray-600 bg-gray-800 py-4 text-sm text-white placeholder-gray-300 focus:outline-none"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col justify-center pt-3">
        <label className="text-xs text-gray-400">Card Number</label>
        <input
          type="text"
          className="h-6 w-full border-b border-gray-600 bg-gray-800 py-4 text-sm text-white placeholder-gray-300 focus:outline-none"
          placeholder="****     ****      ****      ****"
        />
      </div>
      <div className="mb-3 grid grid-cols-3 gap-2 pt-2">
        <div className="col-span-2">
          <label className="text-xs text-gray-400">Expiration Date</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="h-6 w-full border-b border-gray-600 bg-gray-800 py-4 text-sm text-white placeholder-gray-300 focus:outline-none"
              placeholder="mm"
            />
            <input
              type="text"
              className="h-6 w-full border-b border-gray-600 bg-gray-800 py-4 text-sm text-white placeholder-gray-300 focus:outline-none"
              placeholder="yyyy"
            />
          </div>
        </div>
        <div className="">
          <label className="text-xs text-gray-400">CVV</label>
          <input
            type="text"
            className="h-6 w-full border-b border-gray-600 bg-gray-800 py-4 text-sm text-white placeholder-gray-300 focus:outline-none"
            placeholder="XXX"
          />
        </div>
      </div>
      <button
        onClick={() => onCheckout()}
        className="h-12 w-full rounded bg-blue-500 text-white duration-100 hover:bg-blue-600 focus:outline-none active:scale-90"
      >
        Check Out
      </button>
    </div>
  );
};

export default Card;

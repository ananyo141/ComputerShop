// Design Inspiration: https://tailwindui.com/img/components/checkout-pages.01-with-order-summary-sidebar-xl.png

import React from "react";
import CheckoutItems from "./CheckoutItems";
import ShippingForm from "./ShippingForm";

type Props = {};
const Checkout = (props: Props) => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-md flex items-center justify-center text-2xl font-thin text-cyan-700 lg:text-3xl">
          Checkout
        </h1>
      </div>
      <div className="container mx-auto p-12">
        <div className="mx-auto flex w-full flex-col px-0 lg:flex-row">
          <div className="flex flex-col md:w-full">
            <h3 className="text-2xl font-medium text-gray-700">
              Shipping Address
            </h3>
            <p className="mt-2 text-gray-500">
              Fill in your shipping address to get a shipping estimate.
            </p>
            <ShippingForm />
          </div>
          <CheckoutItems />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

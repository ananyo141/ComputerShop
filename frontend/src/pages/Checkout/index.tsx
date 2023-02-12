// Design Inspiration: https://tailwindui.com/img/components/checkout-pages.01-with-order-summary-sidebar-xl.png
// https://bbbootstrap.com/snippets/

import React, { useState } from "react";

import CheckoutItems from "./CheckoutItems";
import ShippingForm from "./ShippingForm";
import Card from "./Card";

type Props = {};

const Checkout = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const onCheckout = () => {
    console.log("Checkout");
  };

  return (
    <div className="bg-gray-300">
      <div className="sm:py-1 md:py-12">
        <div className="container mx-auto rounded-lg bg-gray-100 shadow-lg">
          <div className="md:flex">
            <div className="mt-20 w-full px-10 py-5">
              <h1 className="text-2xl font-thin text-gray-700 xl:pb-12">
                Shipping Details
              </h1>
              <div className="flex flex-col-reverse gap-12 md:flex-row lg:gap-20">
                <ShippingForm
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setAddress={setAddress}
                  setCity={setCity}
                  setState={setState}
                  setZip={setZip}
                  setCountry={setCountry}
                  setPhone={setPhone}
                />
                <div className="mx-auto mt-20">
                  <Card onCheckout={onCheckout} />
                </div>
              </div>
              <div className="mt-32">
                <h1 className="text-xl font-medium">Cart</h1>
                <CheckoutItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

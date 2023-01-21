// Design Inspiration: https://tailwindui.com/img/components/checkout-pages.01-with-order-summary-sidebar-xl.png
// https://bbbootstrap.com/snippets/

import React from "react";

import CheckoutItems from "./CheckoutItems";
import ShippingForm from "./ShippingForm";
import Card from "./Card";

import { Product } from "../../models/Product";

type Props = {
  cartItems: string[];
  getProduct: (id: string) => Product;
  setProductAmount: (id: string, amount: number) => void;
};

const Checkout = (props: Props) => {
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
                <ShippingForm />
                <div className="mx-auto mt-20">
                  <Card />
                </div>
              </div>
              <div className="mt-32 ">
                <h1 className="text-xl font-medium">Shopping Cart</h1>
                <CheckoutItems
                  cartItems={props.cartItems}
                  getProduct={props.getProduct}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

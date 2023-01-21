import React from "react";
import { useNavigate } from "react-router-dom";

import { BsFillQuestionCircleFill } from "react-icons/bs";

import { Product } from "../../models/Product";
import calculateTotal from "../../utils/CalculateTotal";
import Tooltip from "../../components/Tooltip";

type Props = {
  cartItems: string[];
  getProduct: (id: string) => Product;
};

const Summary = ({ cartItems, getProduct }: Props) => {
  const navigate = useNavigate();
  const [subtotal, shippingCost, tax, total] = calculateTotal(
    cartItems,
    getProduct
  );

  return (
    <div className="mx-auto flex min-w-fit flex-col rounded-xl bg-gray-100 p-8 lg:w-3/4">
      <h3 className="text-2xl font-bold text-gray-700">Order Summary</h3>
      <div className="mt-4 flex flex-col">
        <div className="divide-y">
          <div className="flex justify-between py-4">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-bold text-gray-600">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-4">
            <span className="text-gray-500">
              Shipping estimate
              <Tooltip text="Calculated based on your shipping address.">
                <BsFillQuestionCircleFill className="ml-2 inline align-text-top" />
              </Tooltip>
            </span>
            <span className="font-bold text-gray-600">
              ${shippingCost.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-4">
            <span className="text-gray-500">
              Tax
              <Tooltip text="8% inclusive of service charges">
                <BsFillQuestionCircleFill className="ml-2 inline align-text-top" />
              </Tooltip>
            </span>
            <span className="font-bold text-gray-600">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-4">
            <span className="font-bold text-gray-700">Order Total</span>
            <span className="font-bold text-gray-700">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <small className="italic opacity-80">
        <span className="text-red-900">*</span> Shipping cost free above orders
        of $500
      </small>
      <div className="mt-4 flex flex-col">
        <button
          className="rounded-md bg-cyan-700 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Summary;

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ItemCheckoutVar from "../../components/ShopItems/ItemCheckoutVar";
import calculateTotal from "../../utils/CalculateTotal";
import { ProductStorageObjectType } from "../../models/Product";
import { CartStorageObjectType } from "../../models/CartItem";

type Props = {
  products: ProductStorageObjectType;
  cartItems: CartStorageObjectType;
};

const CheckoutItems = ({ products, cartItems }: Props) => {
  const navigate = useNavigate();
  const [subtotal, shippingCost, tax, total] = calculateTotal(
    products,
    cartItems
  );

  return (
    <div className="max-w-4xl p-5">
      {/* Cart Items Here */}
      {Object.keys(cartItems).map((key) => (
        <ItemCheckoutVar
          key={key}
          productId={key}
          products={products}
          cartItems={cartItems}
        />
      ))}
      <div className="mt-6 flex items-center justify-between border-t pt-6">
        <div
          className="group flex cursor-pointer items-center duration-200 hover:scale-110"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="mr-2 text-blue-700 group-hover:text-blue-900" />
          <span className="text-md font-bold text-blue-500">
            Continue Shopping
          </span>
        </div>
        <div className="flex items-end justify-center">
          <span className="mr-1 text-lg font-thin text-gray-500">
            Subtotal:
          </span>
          <span className="px-1 text-lg font-bold text-gray-800">
            ${subtotal}
          </span>
        </div>
      </div>
      <small className="float-right text-red-900 opacity-80">
        + ${(tax + shippingCost).toFixed(2)} charges.
      </small>
    </div>
  );
};

export default CheckoutItems;

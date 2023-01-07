import React from "react";

import ItemCheckoutVar from "../../components/ShopItems/ItemCheckoutVar";

import { ProductStorageObjectType } from "../../models/Product";
import { CartStorageObjectType } from "../../models/CartItem";

type Props = {
  products: ProductStorageObjectType;
  cartItems: CartStorageObjectType;
};

const CheckoutItems = ({ products, cartItems }: Props) => {
  return (
    <div className="col-span-2 mx-auto max-w-4xl p-5">
      <h1 className="text-xl font-medium">Shopping Cart</h1>
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
        <div className="flex items-center">
          <i className="fa fa-arrow-left pr-2 text-sm" />
          <span className="text-md font-medium text-blue-500">
            Continue Shopping
          </span>
        </div>
        <div className="flex items-end justify-center">
          <span className="mr-1 text-sm font-medium text-gray-400">
            Subtotal:
          </span>
          <span className="text-lg font-bold text-gray-800"> $24.90</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;

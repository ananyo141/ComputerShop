import React from "react";

import { ProductStorageObjectType } from "../../models/Product";
import { CartStorageObjectType } from "../../models/CartItem";

type Props = {
  productId: string;
  products: ProductStorageObjectType;
  cartItems: CartStorageObjectType;
};

const ItemCheckoutVar = ({ productId, products, cartItems }: Props) => {
  const product = products[productId];
  return (
    <div className="mt-6 flex items-center justify-between border-t pt-6">
      <div className="flex items-center">
        <img src={product.imgLink} width={60} className="rounded-full" />
        <div className="ml-3 flex flex-col">
          <span className="text-md w-auto font-medium">{product.name}</span>
          <span className="text-xs font-light text-gray-400">
            #{productId.slice(-5)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex pr-8">
          <input
            type="text"
            className="mx-2 h-6 w-8 rounded border bg-gray-100 px-2 text-sm focus:outline-none"
            value={cartItems[productId].amount}
            disabled={true}
          />
        </div>
        <div className="pr-8">
          <span className="text-xs font-medium">${product.price}</span>
        </div>
        <div>
          <i className="fa fa-close text-xs font-medium" />
        </div>
      </div>
    </div>
  );
};

export default ItemCheckoutVar;

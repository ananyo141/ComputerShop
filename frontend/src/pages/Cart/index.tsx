// Design Inspiration: https://tailwindui.com/img/components/shopping-carts.01-two-column-with-quantity-dropdown-xl.jpg

import React from "react";

import { CartStorageObjectType } from "../../models/CartItem";
import { ProductStorageObjectType } from "../../models/Product";
import ItemVar2 from "../../components/ShopItems/ItemVar2";
import Summary from "./Summary";

type Props = {
  products: ProductStorageObjectType;
  cartItems: CartStorageObjectType;
  onCartChange: React.Dispatch<React.SetStateAction<CartStorageObjectType>>;
};

const Cart = ({ products, cartItems, onCartChange }: Props) => {
  return (
    <section className="p-5">
      <h1 className="mt-5 mb-10 text-4xl font-thin">Shopping Cart</h1>
      {/* Contains cart items and order summary horizontally */}
      <div className="container mx-auto flex flex-col justify-between lg:flex-row">
        {/* Contains cart items */}
        <div className="flex flex-col items-center gap-2 lg:gap-9 mb-12 lg:w-2/3 lg:items-start ">
          {Object.keys(cartItems).map((productsId) => (
            <>
              <ItemVar2
                key={productsId}
                productId={productsId}
                products={products}
                cartItems={cartItems}
                onAmountChange={onCartChange}
              />
              <hr className="lg:w-full" />
            </>
          ))}
        </div>
        {/* Contains order summary */}
        <div className="w-full lg:w-1/3">
          <Summary products={products} cartItems={cartItems} />
        </div>
      </div>
    </section>
  );
};

export default Cart;

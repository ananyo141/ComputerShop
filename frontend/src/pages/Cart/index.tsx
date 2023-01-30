// Design Inspiration: https://tailwindui.com/img/components/shopping-carts.01-two-column-with-quantity-dropdown-xl.jpg

import React from "react";

import { Product } from "../../models/Product";

import ItemVar2 from "../../components/ShopItems/ItemVar2";
import Summary from "./Summary";
import EmptyCart from "./EmptyCart";

type Props = {
  cartItems: string[];
  getProduct: (id: string) => Product;
  setProductAmount: (id: string, amount: number) => void;
};

const Cart = ({ cartItems, getProduct, setProductAmount }: Props) => {
  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <section className="p-5">
      <h1 className="mt-16 mb-10 text-4xl font-thin">Shopping Cart</h1>
      {/* Contains cart items and order summary horizontally */}
      <div className="container mx-auto flex flex-col justify-between lg:flex-row">
        {/* Contains cart items */}
        <div className="mb-12 flex flex-col items-center gap-2 lg:w-2/3 lg:items-start lg:gap-9 ">
          {cartItems.map((productId: string, i: number) => (
            <>
              <ItemVar2
                key={i}
                productId={productId}
                getProduct={getProduct}
                setProductAmount={setProductAmount}
              />
              <hr className="lg:w-full" />
            </>
          ))}
        </div>
        {/* Contains order summary */}
        <div className="w-full xl:w-1/2">
          <Summary cartItems={cartItems} getProduct={getProduct} />
        </div>
      </div>
    </section>
  );
};

export default Cart;

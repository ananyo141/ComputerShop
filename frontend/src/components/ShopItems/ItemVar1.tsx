import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { ProductStorageObjectType } from "../../models/Product";
import { CartItem, CartStorageObjectType } from "../../models/CartItem";

type Props = {
  productId: string;
  products: ProductStorageObjectType;
  cartItems: CartStorageObjectType;
  onChangeAmount: CallableFunction;
};

const ItemVar1 = ({
  productId,
  products,
  cartItems,
  onChangeAmount,
}: Props) => {
  const onDecrement = (_: React.MouseEvent<HTMLDivElement>): void => {
    // Decrement the amount related to id
    // Delete if reaches 0
    // Guard against reaching negative number
    if (!cartItems[productId]) return;
    cartItems[productId].amount--;
    if (cartItems[productId].amount === 0) delete cartItems[productId];
    onChangeAmount((_: CartStorageObjectType) => ({
      ...cartItems,
    }));
    console.log(cartItems);
  };
  const onIncrement = (_: React.MouseEvent<HTMLDivElement>): void => {
    // Increment the amount related to id
    // Guard against overflowing max-in-stock value
    let product = cartItems[productId]
      ? cartItems[productId]
      : ({ amount: 0, isWishlisted: false } as CartItem);
    product.amount++;
    cartItems[productId] = product;
    onChangeAmount((_: CartStorageObjectType) => ({
      ...cartItems,
    }));
    console.log(cartItems);
  };

  const product = products[productId];
  return (
    <div className="mb-6 lg:mb-0">
      <div className="relative block rounded-lg bg-white shadow-lg">
        <div className="flex">
          <div
            className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img src={product.imgLink} className="w-full" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[rgba(251,251,251,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-3 text-lg font-bold">{product.name}</h5>
          <p className="mb-4 text-gray-500">
            <small>
              Price <u>${product.price}</u>
              <a href="" className="ml-2 text-gray-900">
                Sold by {product.seller}
              </a>
            </small>
          </p>
          <p className="mb-4 pb-2">{product.desc}</p>
          <div className="flex flex-wrap items-center justify-between gap-3 md:justify-center xl:gap-5">
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block rounded-full bg-blue-600 px-2 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg lg:px-3"
            >
              Add to cart
            </a>
            {/* Item Count */}
            <div className="flex w-28 scale-125 items-center justify-evenly rounded-full bg-gray-300 md:scale-105 xl:scale-110">
              <div onClick={onDecrement}>
                <AiOutlineMinus />
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3 ">
                <FaShoppingCart className="text-amber-700" />
                <p>{cartItems[productId] ? cartItems[productId].amount : 0}</p>
              </div>
              <div onClick={onIncrement}>
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemVar1;

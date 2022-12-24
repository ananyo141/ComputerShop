import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type Props = {};

const ItemCounter = (props: Props) => {
  return (
    <div className="flex scale-125 md:scale-105 w-28 xl:scale-110 items-center justify-evenly rounded-full bg-gray-300">
      {/* <FaShoppingCart className="scale-150 text-amber-700" /> */}
      <div>
        <AiOutlineMinus />
      </div>
      <div className="flex items-center gap-2 rounded-full bg-white px-3 ">
        <FaShoppingCart className="text-amber-700" />
        <p>3</p>
      </div>
      <div>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

const ShopItem = (props: Props) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="relative block rounded-lg bg-white shadow-lg">
        <div className="flex">
          <div
            className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
              className="w-full"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[rgba(251,251,251,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-3 text-lg font-bold">Corsair RGB Ram 16GB</h5>
          <p className="mb-4 text-gray-500">
            <small>
              Price <u>$24.99</u>
              <a href="" className="ml-2 text-gray-900">
                Sold by Corsair Stores
              </a>
            </small>
          </p>
          <p className="mb-4 pb-2">
            CORSAIR Vengeance RGB Pro 16GB (2 x 8GB) 288-Pin
          </p>
          <div className="flex flex-wrap gap-3 xl:gap-5 items-center justify-between md:justify-center">
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block rounded-full bg-blue-600 px-2 lg:px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Add to cart
            </a>
            {/* Item Count */}
            <ItemCounter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;

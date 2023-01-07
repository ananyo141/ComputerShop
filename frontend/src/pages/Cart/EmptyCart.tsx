import React from "react";
import { useNavigate } from "react-router-dom";

import emptyCart from "../../assets/empty_cart.jpg";

type Props = {};

const EmptyCart = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="container mx-auto mt-20 flex w-full bg-white"
      style={{ height: 600 }}
    >
      <div className="flex items-center px-8 text-center md:px-12 lg:w-1/2 lg:text-left">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            Your cart is <span className="text-indigo-600">empty!</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Explore our brand new state of the art technology and handcrafted
            finesse from a wide variety of collection. Shop now!
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              className="rounded bg-gray-900 px-4 py-3 text-xs font-semibold text-gray-200 hover:bg-gray-800"
              href="#"
              onClick={() => navigate("/")}
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          className="h-full bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${emptyCart})`,
          }}
        >
          <div className="h-full bg-black opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

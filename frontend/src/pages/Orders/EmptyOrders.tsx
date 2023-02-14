import React from "react";

import emptyOrders from "../../assets/empty_orders.jpg";

type Props = {};

const EmptyOrders = (props: Props) => {
  return (
    <div className="mt-28 flex flex-col-reverse items-center justify-center gap-16 p-8 md:gap-28 lg:flex-row">
      <div>
        <h1 className="my-2 text-4xl font-bold text-gray-800">
          Looks like you've not placed any orders. <br /> <em>Yet.</em>
        </h1>
        <p className="my-2 text-gray-800">
          You can place orders by choosing your required products from the menu.
        </p>
        <button className="md my-2 rounded border bg-indigo-600 py-4 px-8 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:w-full lg:w-auto">
          Take me there!
        </button>
      </div>

      <img src={emptyOrders} className="w-96" />
    </div>
  );
};

export default EmptyOrders;

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import OrderItem from "./OrderItem";

type Props = {};

const SingleOrder = (props: Props) => {
  return (
    <>
      <div className="mb-12 flex items-baseline justify-between font-bold">
        <div>
          <h1 className="inline-block text-4xl text-gray-800">Order #54879</h1>
          <p className="ml-4 inline-block cursor-pointer text-blue-600">
            <span>View Invoice</span>
            <AiOutlineArrowRight className="ml-2 inline-block" />
          </p>
        </div>
        <p className="text-gray-700">
          <span className="font-extralight">Order Placed</span> March 22, 2023
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <OrderItem />
        <OrderItem />
      </div>
    </>
  );
};

export default SingleOrder;

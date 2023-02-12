import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import OrderItem from "./OrderItem";
import { OrderType } from "../../state/features/orders/orderTypes";

type Props = {
  order: OrderType;
};

const SingleOrder = ({ order }: Props) => {
  return (
    <div className="container mx-auto">
      <div className="mb-12 flex items-baseline justify-between font-bold">
        <div>
          <h1 className="inline-block text-4xl text-gray-800">
            Order #{order._id.slice(-5)}
          </h1>
          <p className="ml-4 inline-block cursor-pointer text-blue-600">
            <span>View Invoice</span>
            <AiOutlineArrowRight className="ml-2 inline-block" />
          </p>
        </div>
        <p className="text-gray-700">
          <span className="font-extralight">Order Placed</span>{" "}
          {new Date(order.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {order.orderItems.map((item, i) => (
          <OrderItem
            key={`Order${i}`}
            item={item}
            shippingDetails={order.shippingDetails}
            paymentDetails={order.payment}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleOrder;

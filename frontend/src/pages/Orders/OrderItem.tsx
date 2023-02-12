import React from "react";

import {
  OrderItemType,
  ShippingDetails,
  PaymentType,
} from "../../state/features/orders/orderTypes";

type Props = {
  item: OrderItemType;
  shippingDetails: ShippingDetails;
  paymentDetails: PaymentType;
};

const OrderItem = ({ item, shippingDetails, paymentDetails }: Props) => {
  return (
    <div className="rounded-lg bg-white p-7 tracking-wide outline-8 drop-shadow">
      <div className="flex gap-5">
        {/* Product Image */}
        <div className="my-auto w-1/2 lg:mr-8 lg:w-1/4">
          <img src={item.imgLink} alt={item.name} className="rounded-lg" />
        </div>
        {/* Product Details */}
        <div className="w-3/4 space-y-3">
          <h3 className="text-lg font-bold text-gray-700">{item.name}</h3>
          <p className="tracking-wider text-gray-700">${item.price}</p>
          <p className="text-gray-500 max-w-xl">{item.desc}</p>
        </div>
        {/* Delivery Address */}
        <div className="w-1/2 text-gray-500 lg:w-1/3">
          <h3 className="mb-2 text-lg font-bold text-gray-700">
            Delivery Address
          </h3>
          <p></p>
          <p>{shippingDetails.address}</p>
          <p>
            {shippingDetails.state} {shippingDetails.country},
            {shippingDetails.zip}
          </p>
        </div>
        {/* Shipping Updates */}
        <div className="w-1/2 space-y-2 text-gray-500 lg:w-1/3">
          <h3 className="mb-2 text-lg font-bold text-gray-700">
            Shipping Updates
          </h3>
          <p>
            {shippingDetails.firstName} {shippingDetails.lastName}
          </p>
          <p>{shippingDetails.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

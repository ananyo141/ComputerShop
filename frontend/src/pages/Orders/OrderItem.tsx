import React from "react";

type Props = {};

const OrderItem = (props: Props) => {
  return (
    <div className="rounded-lg bg-white p-7 tracking-wide outline-8 drop-shadow">
      <div className="flex gap-5">
        {/* Product Image */}
        <div className="my-auto lg:mr-8 w-1/2 lg:w-1/4">
          <img
            src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="rounded-lg"
          />
        </div>
        {/* Product Details */}
        <div className="w-3/4 space-y-3">
          <h3 className="text-lg font-bold text-gray-700">Nomad Tumbler</h3>
          <p className="tracking-wider text-gray-700">$35.00</p>
          <p className="text-gray-500">
            This durable and portable insulated tumbler will keep your beverage
            at the perfect temperature during your next adventure.
          </p>
        </div>
        {/* Delivery Address */}
        <div className="w-1/2 lg:w-1/3 text-gray-500">
          <h3 className="mb-2 text-lg font-bold text-gray-700">
            Delivery Address
          </h3>
          <p>Floyd Miles</p>
          <p>7363 Cynthia Pass</p>
          <p>New York, NY, 10001</p>
        </div>
        {/* Shipping Updates */}
        <div className="w-1/2 space-y-2 lg:w-1/3 text-gray-500">
          <h3 className="mb-2 text-lg font-bold text-gray-700">
            Shipping Updates
          </h3>
          <p>ananyo141@gmail.com</p>
          <p>7881681849</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

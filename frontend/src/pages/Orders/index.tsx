// Design: https://tailwindui.com/img/components/order-detail-pages.03-with-progress-bars-xl.png
import React from "react";

import SingleOrder from "./SingleOrder";
import SpinLoader from "../../components/SpinLoader";
import { useAppSelector } from "../../hooks/useReduxHooks";
import EmptyOrders from "./EmptyOrders";

type Props = {};

const Orders = (props: Props) => {
  const [orders, isLoading] = useAppSelector((state) => [
    state.orders.orders,
    state.orders.isLoading,
  ]);
  return !isLoading && orders.length === 0 ? (
    <EmptyOrders />
  ) : (
    <section className="-mb-52 min-h-screen space-y-20 divide-y-2 bg-gray-100 p-10">
      {isLoading ? (
        <SpinLoader />
      ) : (
        orders.map((order) => (
          <div className="pt-20">
            <SingleOrder key={order._id} order={order} />
          </div>
        ))
      )}
    </section>
  );
};

export default Orders;

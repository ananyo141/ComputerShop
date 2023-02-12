// Design: https://tailwindui.com/img/components/order-detail-pages.03-with-progress-bars-xl.png
import React from "react";

import SingleOrder from "./SingleOrder";

type Props = {};

const Orders = (props: Props) => {
  return (
    <section className="p-10 bg-gray-100 pt-32">
      <div>
        <SingleOrder />
      </div>
    </section>
  );
};

export default Orders;

import React from "react";

import Header from "./Header";
import ItemVar1 from "../../components/ShopItems/ItemVar1";
import Search from "../../components/Search";

import { Product } from "../../models/Product";

type Props = {
  products: { [key: string]: Product };
};

const Home = ({ products }: Props) => {
  return (
    <div>
      <Header />
      <Search />
      <div className="grid gap-x-4 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Object.getOwnPropertyNames(products).map((key, i) => (
          <ItemVar1
            key={i}
            imgUrl={products[key].imgLink}
            title={products[key].name}
            price={products[key].price}
            seller={products[key].seller}
            desc={products[key].desc}
            amount={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

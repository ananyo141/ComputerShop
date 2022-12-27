import React from "react";

import Header from "./Header";
import ShopItem from "./ShopItem";
import Search from "../../components/Search";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Search />
      <div className="grid gap-x-4 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array(8)
          .fill(3)
          .map((_, i) => (
            <ShopItem
              key={i}
              imgUrl="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
              title="Corsair RGB Ram 16GB"
              price={24.99}
              seller="Sold by Corsair Stores"
              desc="CORSAIR Vengeance RGB Pro 16GB (2 x 8GB) 288-Pin"
              amount={i}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

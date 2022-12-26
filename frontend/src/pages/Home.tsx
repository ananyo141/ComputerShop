import React from "react";

import Header from "../components/Header";
import ShopItem from "../components/ShopItem";
import Search from "../components/Search";

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
            <ShopItem key={i} />
          ))}
      </div>
    </div>
  );
};

export default Home;

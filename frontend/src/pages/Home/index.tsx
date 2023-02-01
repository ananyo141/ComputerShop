import React, { useState } from "react";

import Header from "./Header";
import ItemVar1 from "../../components/ShopItems/ItemVar1";
import Search from "../../components/Search";

import { Product } from "../../models/Product";
import { useProductState } from "../../hooks/";

type Props = {};

const Home = (props: Props) => {
  // filter products according to name or description
  const { getAllProduct } = useProductState();
  const productsArray: Product[] = getAllProduct();
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <Header />
      <Search filter={filterText} onFilterChange={setFilterText} />
      <div className="grid gap-x-4 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsArray.map((product: Product, i: number) => {
          // search in both name and desc
          return (product.name + product.desc)
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) !== -1 ? (
            <ItemVar1 key={i} productId={product._id} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Home;

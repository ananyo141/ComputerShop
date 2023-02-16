import React, { useState } from "react";

import Header from "./Header";
import ItemVar1 from "../../components/ShopItems/ItemVar1";
import Search from "../../components/Search";
import SpinLoader from "../../components/SpinLoader";

import { Product } from "../../models/Product";
import { useAppSelector } from "../../hooks/useReduxHooks";

type Props = {};

const Home = (props: Props) => {
  // filter products according to name or description
  const [products, isLoading] = useAppSelector((state) => [
    state.products.items,
    state.products.isLoading,
  ]);
  const [filterText, setFilterText] = useState("");

  return (
    <div className="min-h-screen">
      <Header className="mb-6 lg:mb-12" />
      <Search
        className="mb-12"
        filter={filterText}
        onFilterChange={setFilterText}
      />
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="grid -mb-44 gap-x-4 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Object.values(products).map((product: Product) => {
            // search in both name and desc
            return (
              (product.name + product.desc)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1 && (
                <ItemVar1 key={product._id} productId={product._id} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

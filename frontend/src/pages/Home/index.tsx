import React, { useState } from "react";

import Header from "./Header";
import ItemVar1 from "../../components/ShopItems/ItemVar1";
import Search from "../../components/Search";

import { Product } from "../../models/Product";
import { CartStorageObjectType } from "../../models/CartItem";

type Props = {
  products: Product[];
  cartItems: CartStorageObjectType;
  onCartChange: React.Dispatch<React.SetStateAction<CartStorageObjectType>>;
};

const Home = ({ products, cartItems, onCartChange }: Props) => {
  // filter products according to name or description
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <Header />
      <Search filter={filterText} onFilterChange={setFilterText} />
      <div className="grid gap-x-4 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product: Product, i: number) =>
          // search in both name and desc
          (product.name + product.desc)
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) !== -1 ? (
            <ItemVar1
              key={i}
              product={product}
              cartItems={cartItems}
              onAmountChange={onCartChange}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Home;

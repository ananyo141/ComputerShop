import React from "react";

import Header from "./Header";
import ItemVar1 from "../../components/ShopItems/ItemVar1";
import Search from "../../components/Search";

import { ProductStorageObjectType } from "../../models/Product";
import { CartStorageObjectType } from "../../models/CartItem";

type Props = {
  products: ProductStorageObjectType;
  cartItems: CartStorageObjectType;
  onChangeCart: React.Dispatch<React.SetStateAction<CartStorageObjectType>>;
};

const Home = ({ products, cartItems, onChangeCart }: Props) => {
  return (
    <div>
      <Header />
      <Search />
      <div className="grid gap-x-4 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Object.getOwnPropertyNames(products).map((key, i) => (
          <ItemVar1
            key={i}
            productId={key}
            products={products}
            cartItems={cartItems}
            onChangeAmount={onChangeCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

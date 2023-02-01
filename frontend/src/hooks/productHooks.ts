import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { productActions } from "../state";

import { Product } from "../models/Product";

export const useProductState = () => {
  const [products, cartItems] = useSelector((state: any) => [
    state.products,
    state.cart,
  ]);

  const { setProductsObj } = bindActionCreators(productActions, useDispatch());

  const getProduct = (id: string): Product => {
    const product = products[id];
    // todo: if product is not found in local state, fetch from server
    // product.amount = cartItems[id] ?? 0;
    return product;
  };

  const getAllProductId = (): string[] => {
    return Object.keys(products);
  };

  const getAllProduct = (): Product[] => {
    return Object.values(products);
  };

  const setProducts = (products: { [id: string]: Product }) => {
    setProductsObj(products);
  };

  return { getProduct, getAllProductId, getAllProduct, setProducts };
};

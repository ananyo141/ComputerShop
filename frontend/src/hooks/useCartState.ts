import { useSelector } from "react-redux";

import { Product } from "../models/Product";
import { RootState } from "../state/store";
import deepCopy from "../utils/deepCopy";

// IMPORTANT: Use deepCopy to avoid mutating the state
export const useCartItem = (productId: string): Product => {
  // Get the cart items as Product from store
  const products = useSelector((state: RootState) => state.products.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // TODO: If product not found in state, fetch from server
  const product = deepCopy(products[productId]);
  product.amount = cartItems[productId] ?? 0;
  return product;
};

export const useCartItems = (): Product[] => {
  // Get all the cart items from store as Products
  const products = useSelector((state: RootState) => state.products.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return Object.keys(cartItems).map((id) => {
    const product = deepCopy(products[id]);
    product.amount = cartItems[id];
    return product;
  });
};

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { cartActions } from "../state";
import { Product } from "../models/Product";

import deepCopy from "../utils/deepCopy";

export const useCartState = () => {
  const [products, cartItems] = useSelector((state: any) => [
    state.products,
    state.cart,
  ]);

  const { setCartAmount, setCartObj } = bindActionCreators(
    cartActions,
    useDispatch()
  );

  const getAllCartId = (): string[] => {
    return Object.keys(cartItems);
  };

  const setCart = (cartState: { [id: string]: number }) => {
    setCartObj(cartState);
  };

  const setCartAmt = (id: string, amount: number) => {
    setCartAmount(id, amount);
  };

  const getAllCart = (): Product[] => {
    const cart = Object.keys(cartItems).map((id) => {
      const product = deepCopy(products[id]);
      product.amount = cartItems[id] ?? 0;
      return product;
    });
    return cart;
  };
  return { getAllCartId, getAllCart, setCartAmt, setCart };
};

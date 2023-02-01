import { Dispatch } from "react";
import * as Const from "../constants/cartConstants";

const createPayload = (id: string, amount: number) => ({
  id,
  amount,
});

export const addToCart = (id: string, amount: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: Const.ADD_TO_CART, payload: createPayload(id, amount) });
  };
};

export const subtractFromCart = (id: string, amount: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: Const.REMOVE_FROM_CART,
      payload: createPayload(id, amount),
    });
  };
};

export const deleteFromCart = (id: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: Const.DELETE_FROM_CART, payload: createPayload(id, 0) });
  };
};

export const setCartAmount = (id: string, amount: number) => {
  if (amount <= 0) return deleteFromCart(id);

  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: Const.SET_CART_AMOUNT,
      payload: createPayload(id, amount),
    });
  };
};

export const setCartObj = (cart: { [id: string]: number }) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: Const.SET_CART, payload: cart });
  };
};

export const clearCart = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: Const.CLEAR_CART, payload: {} });
  };
};

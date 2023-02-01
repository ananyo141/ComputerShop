import { Dispatch } from "react";

import { Product } from "../../models/Product";
import * as Const from "../constants/productConstants";

export const setProductsObj = (products: { [id: string]: Product }) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: Const.SET_PRODUCTS, payload: products });
  };
};

export const clearProducts = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: Const.SET_PRODUCTS, payload: {} });
  };
};

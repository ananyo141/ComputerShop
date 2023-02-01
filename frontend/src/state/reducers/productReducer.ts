import { AnyAction } from "@reduxjs/toolkit";

import { Product } from "../../models/Product";
import * as Const from "../constants/productConstants";
import deepCopy from "../../utils/deepCopy";

type StateType = {
  [id: string]: Product;
};

const initialState = {};

export const productReducer = (
  state: StateType = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case Const.SET_PRODUCTS:
      return deepCopy(action.payload);
    case Const.CLEAR_PRODUCTS:
      return {};
    default:
      return state;
  }
};

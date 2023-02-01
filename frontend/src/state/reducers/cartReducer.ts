import { AnyAction } from "@reduxjs/toolkit";

import * as Const from "../constants/cartConstants";
import deepCopy from "../../utils/deepCopy";

type StateType = {
  [id: string]: number;
};

const initialState: StateType = {};

export const cartReducer = (
  state: StateType = initialState,
  action: AnyAction
) => {
  const _setCartAmount = (id: string, amount: number) => {
    const newState = deepCopy(state);
    if (amount <= 0) delete newState[id];
    else newState[id] = amount;
    return deepCopy(newState);
  };

  switch (action.type) {
    case Const.SET_CART:
      return { ...action.payload };
    case Const.ADD_TO_CART:
      return _setCartAmount(
        action.payload.id,
        state[action.payload.id] + action.payload.amount
      );
    case Const.REMOVE_FROM_CART:
      return _setCartAmount(
        action.payload.id,
        state[action.payload.id] - action.payload.amount
      );
    case Const.DELETE_FROM_CART:
      return _setCartAmount(action.payload.id, 0);
    case Const.SET_CART_AMOUNT:
      return _setCartAmount(action.payload.id, action.payload.amount);
    case Const.CLEAR_CART:
      return {};
    default:
      return state;
  }
};

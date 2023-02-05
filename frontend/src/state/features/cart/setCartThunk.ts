import { createAsyncThunk } from "@reduxjs/toolkit";

import * as CartApi from "../../../api/CartApi";
import { resolve } from "../../../utils/Resolve";
import { CartItemPayload } from "./cartTypes";

export const setCartApi = createAsyncThunk(
  "cart/setCartApi",
  async (item: CartItemPayload, thunkAPI: any) => {
    // if item exists in cart, call the updateCart api
    // otherwise, call the addToCart api to insert item into cart
    const isItemInCart = thunkAPI.getState().cart.items[item.id] != null;
    const updateApi = isItemInCart ? CartApi.updateCart : CartApi.addToCart;

    // if item doesn't exist in cart and given amount is 0, do nothing
    if (!isItemInCart && item.amount <= 0) return;

    let error, response;
    // if amount is 0, call the removeFromCart api
    if (item.amount <= 0) {
      [error, response] = await resolve(CartApi.removeFromCart(item.id));
    } else {
      [error, response] = await resolve(updateApi(item.id, item.amount));
    }
    if (error) return thunkAPI.rejectWithValue(error.message);
    return item;
  }
);

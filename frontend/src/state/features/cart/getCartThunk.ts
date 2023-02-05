import { createAsyncThunk } from "@reduxjs/toolkit";

import * as CartApi from "../../../api/CartApi";
import { resolve } from "../../../utils/Resolve";

export const getCartApi = createAsyncThunk(
  "cart/getCartApi",
  async (_, thunkAPI) => {
    const [error, response] = await resolve(CartApi.getCart());
    if (error) return thunkAPI.rejectWithValue(error.message);
    return response;
  }
);

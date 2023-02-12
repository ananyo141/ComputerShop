import { createAsyncThunk } from "@reduxjs/toolkit";

import * as OrderApi from "../../../api/OrderApi";
import { resolve } from "../../../utils/Resolve";
import { ShippingDetails } from "./orderTypes";

export const getOrdersApi = createAsyncThunk(
  "orders/getOrdersApi",
  async (accessToken: string, thunkAPI) => {
    const [error, response] = await resolve(OrderApi.getOrders(accessToken));
    if (error) return thunkAPI.rejectWithValue(error.message);
    return response;
  }
);

export const createOrderApi = createAsyncThunk(
  "orders/createOrderApi",
  async (
    payload: { accessToken: string; shippingDetails: ShippingDetails },
    thunkAPI
  ) => {
    const [error, response] = await resolve(
      OrderApi.createOrder(payload.accessToken, payload.shippingDetails)
    );
    if (error) return thunkAPI.rejectWithValue(error.message);
    return response;
  }
);

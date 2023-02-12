import { createSlice } from "@reduxjs/toolkit";

import { getOrdersApi, createOrderApi } from "./orderThunks";

import { OrderState } from "./orderTypes";

const initialState: OrderState = {
  orders: [],
  newOrderNotifications: 0,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increaseNotification: (state) => {
      state.newOrderNotifications++;
    },
    clearNotification: (state) => {
      state.newOrderNotifications = 0;
    },
    clearOrders: (_) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Get Orders
    builder
      .addCase(getOrdersApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrdersApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrdersApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Create order
    builder
      .addCase(createOrderApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrderApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = [action.payload, ...state.orders];
      })
      .addCase(createOrderApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { increaseNotification, clearNotification, clearOrders } =
  orderSlice.actions;
export { getOrdersApi, createOrderApi };
export default orderSlice.reducer;

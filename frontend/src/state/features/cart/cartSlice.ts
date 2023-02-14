import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartType, CartItemPayload, CartState } from "./cartTypes";
import { getCartApi, setCartApi } from "./cartThunks";

export const initialState: CartState = {
  items: {},
  amount: 0,
  subtotal: 0,
  shippingCost: 0,
  tax: 0,
  total: 0,
  isLoading: false,
  error: null,
};

const _setCartAmount = (state: CartState, id: string, amount: number) => {
  const cart = state.items;
  state.amount -= cart[id] ?? 0;

  if (amount <= 0) {
    delete cart[id];
  } else {
    cart[id] = amount;
    state.amount += amount;
  }
  return state;
};

// If changing the entire state, return the new state object
// for properly updating the state
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartType>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItemPayload>) => {
      const { id, amount } = action.payload;
      return _setCartAmount(state, id, state.items[id] + amount);
    },
    subtractFromCart: (state, action: PayloadAction<CartItemPayload>) => {
      const { id, amount } = action.payload;
      return _setCartAmount(state, id, state.items[id] - amount);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return _setCartAmount(state, id, 0);
    },
    setCartAmount: (state, action: PayloadAction<CartItemPayload>) => {
      const { id, amount } = action.payload;
      return _setCartAmount(state, id, amount);
    },
    clearCart: (_) => {
      return initialState;
    },
  },
  // use api calls in thunks and update state in reducers
  extraReducers: (builder) => {
    builder
      .addCase(getCartApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.cart;
        state.amount = (Object.values(action.payload.cart) as number[]).reduce(
          (acc, val) => acc + val,
          0
        );
        state.subtotal = action.payload.subtotal;
        state.shippingCost = action.payload.shippingCost;
        state.tax = action.payload.tax;
        state.total = action.payload.total;
      })
      .addCase(getCartApi.rejected, (state, action) => {
        state.isLoading = false;
        // FIXME: What is serialized error?
        state.error = action.error as Error;
      });

    builder.addCase(setCartApi.fulfilled, (state, action) => {
      const newState = _setCartAmount(
        state,
        action.payload.id,
        action.payload.amount
      );
      newState.subtotal = action.payload.subtotal;
      newState.shippingCost = action.payload.shippingCost;
      newState.tax = action.payload.tax;
      newState.total = action.payload.total;
      return newState;
    });
  },
});

export const {
  setCart,
  addToCart,
  subtractFromCart,
  removeFromCart,
  setCartAmount,
  clearCart,
} = cartSlice.actions;

export { getCartApi, setCartApi };
export default cartSlice.reducer;

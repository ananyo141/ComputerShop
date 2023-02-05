import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartType, CartItemPayload, CartState } from "./cartTypes";
import { getCartApi } from "./getCartThunk";
import { setCartApi } from "./setCartThunk";

export const initialState: CartState = {
  items: {},
  amount: 0,
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
    clearCart: (state) => {
      state.items = {};
      state.amount = 0;
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
        state.items = action.payload;
        state.amount = (Object.values(action.payload) as number[]).reduce(
          (acc, val) => acc + val,
          0
        );
      })
      .addCase(getCartApi.rejected, (state, action) => {
        state.isLoading = false;
        // FIXME: What is serialized error?
        state.error = action.error as Error;
      });

    builder
      .addCase(setCartApi.fulfilled, (state, action) => {
        return _setCartAmount(state, action.payload.id, action.payload.amount);
      })
      .addCase(setCartApi.rejected, (state, action) => {
        // TODO: set error modal here
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

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ProductItemType, ProductState } from "./productTypes";
import * as ProductApi from "../../../api/ProductApi";
import { resolve } from "../../../utils/Resolve";

const initialState: ProductState = {
  items: {},
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const [error, response] = await resolve(ProductApi.getAllProducts());
    if (error) return thunkAPI.rejectWithValue(error.message);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductItemType>) => {
      state.items = action.payload;
    },
    clearProducts: (state) => {
      state.items = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as Error;
      });
  },
});

export const { setProducts, clearProducts } = productSlice.actions;
export default productSlice.reducer;

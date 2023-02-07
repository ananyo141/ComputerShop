import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";
import loginReducer from "./features/login/loginSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

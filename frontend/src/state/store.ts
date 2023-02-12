import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./features/login/loginSlice";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/orders/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    login: loginReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

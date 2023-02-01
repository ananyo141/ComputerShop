import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;

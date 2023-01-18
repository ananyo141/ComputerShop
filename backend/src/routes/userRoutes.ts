import express from "express";

import { getUserInfo } from "../controllers/userControllers";
import {
  getUserCart,
  addUserCart,
  putUserCart,
  patchUserCart,
  deleteUserCart,
} from "../controllers/cartControllers";
import { getUserOrders } from "../controllers/orderControllers";

export const userRouter = express.Router();

userRouter.get("/:id", getUserInfo);

userRouter.route("/:id/cart").get(getUserCart).post(addUserCart);
userRouter
  .route("/:id/cart/:prod_id")
  .put(putUserCart)
  .patch(patchUserCart)
  .delete(deleteUserCart);

userRouter.route("/:id/orders").get(getUserOrders);

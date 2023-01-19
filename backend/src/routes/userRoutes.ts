import express from "express";

import {
  getUsers,
  getUserInfo,
  patchUser,
  deleteUser,
} from "../controllers/userControllers";

import {
  getUserCart,
  addUserCart,
  patchUserCart,
  deleteUserCart,
} from "../controllers/cartControllers";

import {
  getUserOrders,
  addUserOrder,
  getUserOrder,
} from "../controllers/orderControllers";

export const userRouter = express.Router();

// User Routes //
// NOTE: User create route is not needed because it is handled by authRoutes
userRouter.get("/", getUsers);
userRouter.route("/:id").get(getUserInfo).patch(patchUser).delete(deleteUser);

// Cart Routes //
userRouter.route("/:id/cart").get(getUserCart).post(addUserCart);
userRouter
  .route("/:id/cart/:prod_id")
  .patch(patchUserCart)
  .delete(deleteUserCart);

// Order Routes //
userRouter.route("/:id/orders").get(getUserOrders).post(addUserOrder);
userRouter.route("/:id/orders/:order_id").get(getUserOrder);

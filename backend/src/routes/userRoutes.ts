import express from "express";

import { authenticateToken } from "../middleware/authenticateToken";

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
userRouter
  .route("/:id")
  .get(authenticateToken, getUserInfo)
  .patch(authenticateToken, patchUser)
  .delete(authenticateToken, deleteUser);

// Cart Routes //
userRouter
  .route("/:id/cart")
  .get(authenticateToken, getUserCart)
  .post(authenticateToken, addUserCart);
userRouter
  .route("/:id/cart/:prod_id")
  .patch(authenticateToken, patchUserCart)
  .delete(authenticateToken, deleteUserCart);

// Order Routes //
userRouter
  .route("/:id/orders")
  .get(authenticateToken, getUserOrders)
  .post(authenticateToken, addUserOrder);
userRouter.route("/:id/orders/:order_id").get(authenticateToken, getUserOrder);

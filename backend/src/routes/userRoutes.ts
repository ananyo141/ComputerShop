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
  deleteUserOrder,
} from "../controllers/orderControllers";

export const userRouter = express.Router();

// User Routes //
// NOTE: User create route is not needed because it is handled by authRoutes
userRouter.get("/", getUsers);
userRouter
  .route("/profile")
  .get(authenticateToken, getUserInfo)
  .patch(authenticateToken, patchUser)
  .delete(authenticateToken, deleteUser);

// Cart Routes //
userRouter
  .route("/cart")
  .get(authenticateToken, getUserCart)
  .post(authenticateToken, addUserCart);
userRouter
  .route("/cart/:prod_id")
  .patch(authenticateToken, patchUserCart)
  .delete(authenticateToken, deleteUserCart);

// Order Routes //
userRouter
  .route("/orders")
  .get(authenticateToken, getUserOrders)
  .post(authenticateToken, addUserOrder);
userRouter
  .route("/orders/:order_id")
  .get(authenticateToken, getUserOrder)
  .delete(authenticateToken, deleteUserOrder);

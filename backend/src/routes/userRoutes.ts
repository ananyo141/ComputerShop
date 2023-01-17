import express from "express";

import { getUserInfo } from "../controllers/userControllers";
import { getUserCart } from "../controllers/cartControllers";
import { getUserOrders } from "../controllers/orderControllers";

export const userRouter = express.Router();

userRouter.get("/:id", getUserInfo);
userRouter.get("/:id/cart", getUserCart);
userRouter.get("/:id/orders", getUserOrders);

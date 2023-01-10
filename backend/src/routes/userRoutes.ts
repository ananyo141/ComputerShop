import express from "express";

import {
  userInfoController,
  userCartController,
  userOrderController,
} from "../controllers/userControllers";

export const userRouter = express.Router();

userRouter.get("/:id", userInfoController);
userRouter.get("/:id/cart", userCartController);
userRouter.get("/:id/orders", userOrderController);

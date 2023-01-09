import express from "express";

import {
  registerController,
  loginController,
  logoutController,
} from "../controllers/userControllers";

export const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.post("/logout", logoutController);

userRouter.get("/", (_req, _res) => {
  _res.send("User route");
});

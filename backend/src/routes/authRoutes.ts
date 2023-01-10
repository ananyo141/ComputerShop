import express from "express";

import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/authControllers";

export const authRouter = express.Router();
authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.post("/logout", logoutController);

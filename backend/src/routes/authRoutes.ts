import express from "express";

import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/authControllers";
import * as CustomError from "../errors";

export const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.post("/logout", logoutController);

// fallback route
authRouter.use((_req, _res, _next) => {
  _next(new CustomError.ForbiddenError("Only POST requests are allowed"));
});

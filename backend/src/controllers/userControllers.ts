import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import * as CustomError from "../errors";
import UserModel from "../models/userModel";
import asyncWrapper from "../utils/asyncWrapper";

export const getUserInfo = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user);
    if (!user) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      _res
        .status(StatusCodes.OK)
        .json({ name: user.name, email: user.email, id: user._id });
    }
  }
);

export const patchUser = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user);
    if (!user) _next(new CustomError.NotFoundError("User not found"));
    else {
      user.set(_req.body);
      await user.save();
      _res.status(StatusCodes.OK).json(user);
    }
  }
);

export const deleteUser = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user);
    if (!user) _next(new CustomError.NotFoundError("User not found"));
    else {
      await user.delete();
      _res.status(StatusCodes.OK).json(user);
    }
  }
);

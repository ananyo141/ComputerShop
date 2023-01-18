import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as CustomError from "../errors";
import mongoose from "mongoose";

import UserModel from "../models/userModel";

export const getUserInfo = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const user = await UserModel.findById(_req.params.id);
    if (!user) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      _res.status(StatusCodes.OK).json(user);
    }
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      _next(new CustomError.BadRequestError("Invalid user id"));
    }
    _next(new CustomError.InternalServerError("Something went wrong"));
  }
};

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

import UserModel from "../models/userModel";
import * as CustomError from "../errors/";

export const getUserOrders = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const orders = await UserModel.findById(_req.params.id).select("orders");
    if (!orders) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      _res.status(StatusCodes.OK).json(orders);
    }
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      _next(new CustomError.BadRequestError("Invalid user id"));
    }
    _next(new CustomError.InternalServerError("Something went wrong"));
  }
};

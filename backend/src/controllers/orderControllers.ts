import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import UserModel from "../models/userModel";
import * as CustomError from "../errors/";
import asyncWrapper from "../utils/asyncWrapper";

export const getUserOrders = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const orders = await UserModel.findById(_req.params.id).select("orders");
    if (!orders) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      _res.status(StatusCodes.OK).json(orders);
    }
  }
);

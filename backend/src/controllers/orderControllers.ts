import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import UserModel from "../models/userModel";
import * as CustomError from "../errors/";
import asyncWrapper from "../utils/asyncWrapper";

export const getUserOrders = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.params.id).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    _res.status(StatusCodes.OK).json(user.orders);
  }
);

export const getUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.params.id).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const order = user.orders.find((item) =>
      item._id?.equals(_req.params.order_id)
    );
    if (!order) return _next(new CustomError.NotFoundError("Order not found"));
    _res.status(StatusCodes.OK).json(order);
  }
);

export const addUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.params.id).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    // add order to user
    user.orders.push(_req.body);
    await user.save();
    _res.status(StatusCodes.CREATED).json(user);
  }
);

export const deleteUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {}
);

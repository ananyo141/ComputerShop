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

export const getUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.params.id).select("orders");
    if (!user) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      const order = user.orders.find((item) =>
        item._id?.equals(_req.params.order_id)
      );
      if (!order) {
        _next(new CustomError.NotFoundError("Order not found"));
      } else {
        _res.status(StatusCodes.OK).json(order);
      }
    }
  }
);

export const addUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.params.id).select("orders");
    if (!user) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      // add order to user
      user.orders.push(_req.body);
      await user.save();
      _res.status(StatusCodes.CREATED).json(user);
    }
  }
);

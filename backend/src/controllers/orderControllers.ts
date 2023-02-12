import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import ProductModel from "../models/productModel";
import UserModel from "../models/userModel";
import * as CustomError from "../errors/";
import asyncWrapper from "../utils/asyncWrapper";
import calculateTotal from "../utils/calculateTotal";
import bcrypt from "bcrypt";

export const getUserOrders = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    _res.status(StatusCodes.OK).json(user.orders);
  }
);

export const getUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user).select("orders");
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
    let user = await UserModel.findById(_req.user);
    if (!user) return _next(new CustomError.NotFoundError("User not found"));

    // another way to do this is to use the populate method
    // const products = await ProductModel.find({
    //   _id: { $in: user.cart.map((item) => item.product) },
    // });
    const cartProducts = await ProductModel.populate(user.cart, {
      path: "product",
    });
    const { subtotal, shippingCost, tax, total } = calculateTotal(
      user.cartTotal
    );
    const newOrder = {
      // shipping details
      shippingDetails: _req.body,
      // get cart items from user
      orderItems: cartProducts.map((item: any) => {
        return {
          imgLink: item.product.imgLink,
          name: item.product.name,
          price: item.product.price,
          seller: item.product.seller,
          desc: item.product.desc,
          quantity: item.amount,
        };
      }),
      // get cart total from user
      payment: {
        // generate a random payment id
        transactionId: await bcrypt.hash(`${user._id}${Date.now()}`, 2),
        subtotal: subtotal,
        tax: tax,
        shippingCost: shippingCost,
        total: total,
      },
    };
    user.orders.push(newOrder);
    user = await user.save();
    _res.status(StatusCodes.CREATED).json(user.orders.at(-1)); // send back the last order inserted with _id
  }
);

export const deleteUserOrder = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    let user = await UserModel.findById(_req.user).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const index = user.orders.findIndex((item) =>
      item._id?.equals(_req.params.order_id)
    );
    if (index === -1)
      return _next(new CustomError.NotFoundError("Order not found"));
    user.orders.splice(index, 1);
    user = await user.save();
    _res.status(StatusCodes.OK).json(user.orders);
  }
);

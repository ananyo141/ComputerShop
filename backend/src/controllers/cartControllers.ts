import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import UserModel from "../models/userModel";
import * as CustomError from "../errors/";
import asyncWrapper from "../utils/asyncWrapper";

export const getUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const cart = await UserModel.findById(_req.user).select("cart");
    if (!cart) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      _res.status(StatusCodes.OK).json(cart);
    }
  }
);

export const addUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const cart = await UserModel.findById(_req.user).select("cart");
    if (!cart) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      // add product to cart
      cart.cart.push(_req.body);
      await cart.save();
      _res.status(StatusCodes.CREATED).json(cart);
    }
  }
);

export const patchUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const userId = _req.user;
    const productId = _req.params.prod_id;

    let user = await UserModel.findById(userId).select("cart");
    if (!user) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      // update product in cart
      const product = user.cart.find((item) => item.product.equals(productId));
      if (!product)
        _next(new CustomError.NotFoundError("Product not found in cart"));
      product!.amount = _req.body.amount;
      user = await user.save();
      _res.status(StatusCodes.OK).json(user);
    }
  }
);

export const deleteUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const userId = _req.user;
    const productId = _req.params.prod_id;

    let user = await UserModel.findById(userId).select("cart");
    if (!user) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      // delete product from cart
      const index = user.cart.findIndex((item) =>
        item.product.equals(productId)
      );
      user.cart.splice(index, 1);
      user = await user.save();
      _res.status(StatusCodes.OK).json(user);
    }
  }
);

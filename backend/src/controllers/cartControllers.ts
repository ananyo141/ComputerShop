import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import UserModel from "../models/userModel";
import ProductModel from "../models/productModel";
import * as CustomError from "../errors/";
import asyncWrapper from "../utils/asyncWrapper";
import calculateTotal from "../utils/calculateTotal";

export const getUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user);
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    _res
      .status(StatusCodes.OK)
      .json({ cart: user.cart, ...calculateTotal(user.cartTotal) });
  }
);

export const addUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const user = await UserModel.findById(_req.user);
    const product = await ProductModel.findById(_req.body.product).select(
      "price"
    );
    if (!product)
      return _next(new CustomError.NotFoundError("Product not found"));
    if (!user) return _next(new CustomError.NotFoundError("User not found"));

    // add product to cart
    user.cart.push(_req.body);
    // add product price to cart total
    user.cartTotal += product.price! * _req.body.amount;
    await user.save();
    _res.status(StatusCodes.CREATED).json(calculateTotal(user.cartTotal));
  }
);

export const patchUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const userId = _req.user;
    const productId = _req.params.prod_id;

    let user = await UserModel.findById(userId);
    const productInfo = await ProductModel.findById(productId).select("price");
    if (!productInfo)
      return _next(new CustomError.NotFoundError("Product not found"));
    if (!user) return _next(new CustomError.NotFoundError("User not found"));

    // update product in cart
    const product = user.cart.find((item) => item.product.equals(productId));
    if (!product)
      return _next(new CustomError.NotFoundError("Product not found in cart"));
    const prevAmount = product.amount;
    product.amount = _req.body.amount;
    user.cartTotal += (product.amount - prevAmount) * productInfo.price!;
    user = await user.save();
    _res.status(StatusCodes.OK).json(calculateTotal(user.cartTotal));
  }
);

export const deleteUserCart = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const userId = _req.user;
    const productId = _req.params.prod_id;

    let user = await UserModel.findById(userId);
    const product = await ProductModel.findById(productId).select("price");
    if (!product)
      return _next(new CustomError.NotFoundError("Product not found"));
    if (!user) return _next(new CustomError.NotFoundError("User not found"));

    // delete product from cart
    const index = user.cart.findIndex((item) => item.product.equals(productId));
    user.cartTotal -= product.price! * user.cart[index].amount;
    user.cart.splice(index, 1);
    user = await user.save();
    _res.status(StatusCodes.OK).json(calculateTotal(user.cartTotal));
  }
);

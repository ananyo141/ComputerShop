import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

import UserModel from "../models/userModel";
import * as CustomError from "../errors/";

export const getUserCart = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const cart = await UserModel.findById(_req.params.id).select("cart");
    if (!cart) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      _res.status(StatusCodes.OK).json(cart);
    }
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      _next(new CustomError.BadRequestError("Invalid user id"));
    }
    _next(new CustomError.InternalServerError("Something went wrong"));
  }
};

export const addUserCart = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const cart = await UserModel.findById(_req.params.id).select("cart");
    if (!cart) {
      _next(new CustomError.NotFoundError("User not found"));
    } else {
      // add product to cart
      cart.cart.push(_req.body);
      await cart.save();
      _res.status(StatusCodes.CREATED).json(cart);
    }
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      _next(new CustomError.BadRequestError("Invalid user id"));
    }
    _next(
      new CustomError.InternalServerError(
        `Something went wrong ${error.message}`
      )
    );
  }
};

export const patchUserCart = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  const userId = _req.params.id;
  const productId = _req.params.prod_id;

  try {
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
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      _next(new CustomError.BadRequestError("Invalid user id"));
    }
    _next(
      new CustomError.InternalServerError(
        `Something went wrong ${error.message}`
      )
    );
  }
};

export const deleteUserCart = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  const userId = _req.params.id;
  const productId = _req.params.prod_id;

  try {
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
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      _next(new CustomError.BadRequestError("Invalid user id"));
    }
    _next(
      new CustomError.InternalServerError(
        `Something went wrong ${error.message}`
      )
    );
  }
};

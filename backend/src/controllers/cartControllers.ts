import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import UserModel from "../models/userModel";
import * as CustomError from "../errors/";

export const getCart = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const cart = await UserModel.findById(_req.params.id).select("cart");
    _res.status(StatusCodes.OK).json(cart);
  } catch (error: any) {
    _next(new CustomError.NotFoundError(error.message));
  }
};

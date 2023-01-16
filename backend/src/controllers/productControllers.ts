import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import * as CustomError from "../errors/";

import ProductModel from "../models/productModel";

export const getProduct = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const product = await ProductModel.findOne({ _id: _req.params.id });
    _res.status(StatusCodes.OK).json(product);
  } catch (err: any) {
    _next(new CustomError.NotFoundError(err.message));
  }
};

export const getAllProducts = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const products = await ProductModel.find();
    _res.status(StatusCodes.OK).json(products);
  } catch (err: any) {
    _next(new CustomError.InternalServerError(err.message));
  }
};

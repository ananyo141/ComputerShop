import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import ProductModel from "../models/productModel";
import asyncWrapper from "../utils/asyncWrapper";

export const getProduct = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const product = await ProductModel.findOne({ _id: _req.params.id });
    _res.status(StatusCodes.OK).json(product);
  }
);

export const getAllProducts = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const products = await ProductModel.find();
    _res.status(StatusCodes.OK).json(products);
  }
);

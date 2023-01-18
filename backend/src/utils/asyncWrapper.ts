import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import * as CustomError from "../errors/";

type Callback = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => Promise<void>;

// Generate a wrapper function that executes the callback function
// safely and handles any errors that may occur
const asyncWrapper =
  (callback: Callback): Callback =>
  async (_req: Request, _res: Response, _next: NextFunction): Promise<void> => {
    try {
      await callback(_req, _res, _next);
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

export default asyncWrapper;

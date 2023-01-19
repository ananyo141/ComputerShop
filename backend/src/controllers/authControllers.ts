import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import User from "../models/userModel";
import * as CustomErrors from "../errors";
import asyncWrapper from "../utils/asyncWrapper";

export const loginController = asyncWrapper(
  async (_req: Request, _res: Response) => {
    _res.status(StatusCodes.OK).json(_req.body);
  }
);

export const registerController = asyncWrapper(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    if (!_req.body.name || !_req.body.email || !_req.body.password)
      _next(
        new CustomErrors.BadRequestError("Please provide all required fields")
      );

    let user = await User.findOne({
      email: _req.body.email,
    });
    if (user) _next(new CustomErrors.BadRequestError("User already exists"));
    else {
      user = await User.create(_req.body);
      _res.status(StatusCodes.CREATED).json(user);
    }
  }
);

export const logoutController = asyncWrapper(
  async (_req: Request, _res: Response) => {
    _res.status(StatusCodes.OK).json(_req.body);
  }
);

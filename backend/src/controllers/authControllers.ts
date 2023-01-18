import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import User from "../models/userModel";
import * as CustomErrors from "../errors";

export const loginController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.OK).json(_req.body);
};

export const registerController = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  if (!_req.body.name || !_req.body.email || !_req.body.password)
    _next(
      new CustomErrors.BadRequestError("Please provide all required fields")
    );

  let user = await User.findOne({
    email: _req.body.email,
  });

  try {
    user = await User.create(_req.body);
    _res.status(StatusCodes.CREATED).json(user);
  } catch (err: any) {
    return _next(new CustomErrors.InternalServerError(err.message));
  }
};

export const logoutController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.OK).json(_req.body);
};

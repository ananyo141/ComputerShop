import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MongooseError, SchemaType } from "mongoose";

import User from "../models/userModel";
import * as CustomErrors from "../errors";

export const loginController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.OK).json(_req.body);
};

export const registerController = (_req: Request, _res: Response) => {
  if (!_req.body.name || !_req.body.email || !_req.body.password)
    throw new CustomErrors.BadRequestError(
      "Please provide all required fields"
    );

  User.create(_req.body, (err: MongooseError, user: SchemaType) => {
    if (err) {
      if (err.name === "ValidationError") {
        throw new CustomErrors.BadRequestError(err.message);
      } else {
        throw new CustomErrors.InternalServerError(err.message);
      }
    } else {
      _res.status(StatusCodes.CREATED).json(user);
    }
  });
};

export const logoutController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.OK).json(_req.body);
};

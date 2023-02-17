import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import env from "../utils/environment";
import * as CustomError from "../errors";

export const authenticateToken = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  const authHeader = _req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    throw new CustomError.UnauthorizedError("No token provided");

  jwt.verify(token, env.ACCESS_TOKEN_SECRET, (err, user: any) => {
    if (err) throw new CustomError.UnauthorizedError(err.message);
    _req.user = user.userId;
    _next();
  });
};

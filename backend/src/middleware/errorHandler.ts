// Intercept and serialize errors into readable error messages with status
// codes to be returned to the client.
import { NextFunction, Request, Response } from "express";
import { CustomApiError } from "../errors/customApiError";

export const errorHandler = (
  err: CustomApiError,
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  console.log(err);
  return _res.status(err.statusCode).json({ message: err.message });
};

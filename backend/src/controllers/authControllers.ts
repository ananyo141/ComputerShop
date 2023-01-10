import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const loginController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.OK).json(_req.body);
};

export const registerController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.CREATED).json(_req.body);
};

export const logoutController = (_req: Request, _res: Response) => {
  _res.status(StatusCodes.OK).json(_req.body);
};

import { Request, Response } from "express";

export const registerController = (_req: Request, _res: Response) => {
  _res.send("register route");
};

export const loginController = (_req: Request, _res: Response) => {
  _res.send("login route");
};

export const logoutController = (_req: Request, _res: Response) => {
  _res.send("logout route");
};

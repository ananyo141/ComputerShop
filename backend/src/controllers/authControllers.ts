import { Request, Response } from "express";

export const loginController = (_req: Request, _res: Response) => {
  console.info("Login called");
};

export const registerController = (_req: Request, _res: Response) => {
  console.info("Register called");
};

export const logoutController = (_req: Request, _res: Response) => {
  console.info("Logout called");
};

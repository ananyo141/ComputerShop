import { Request, Response } from "express";
export const getProduct = async (_req: Request, _res: Response) => {
  _res.send("getProduct Route");
};

export const getAllProducts = (_req: Request, _res: Response) => {
  _res.send("getAllProducts route");
};

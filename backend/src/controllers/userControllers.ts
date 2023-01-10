import { Request, Response } from "express";

export const userInfoController = (_req: Request, _res: Response) => {
  _res.json({ id: _req.params.id });
};

export const userCartController = (_req: Request, _res: Response) => {
  _res.json({ id: _req.params.id });
};

export const userOrderController = (_req: Request, _res: Response) => {
  _res.json({ id: _req.params.id });
};

import { Request, Response } from "express";

export const notFound = (_req: Request, _res: Response) => {
  _res.status(404).send({ error: "Bad method or route does not exist" });
};

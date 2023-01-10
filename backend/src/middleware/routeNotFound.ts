import { Request, Response } from "express";
import { NotFoundError } from "../errors/notFoundError";

export const routeNotFound = (_req: Request, _res: Response) => {
  throw new NotFoundError("Bad method or route does not exist");
};

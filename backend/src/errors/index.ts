// Compilation of common errors for reuse, throw them as needed
// Express intercepts exceptions and sends them to the error handler

import { NotFoundError } from "./notFoundError";
import { BadRequestError } from "./badRequestError";
import { ForbiddenError } from "./forbiddenError";
import { UnauthorizedError } from "./unauthorizedError";
import { InternalServerError } from "./internalServerError";

export {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  UnauthorizedError,
  InternalServerError,
};

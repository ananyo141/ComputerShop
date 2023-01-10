import { CustomApiError } from "./customApiError";
import { StatusCodes } from "http-status-codes";

class ForbiddenError extends CustomApiError {
  constructor(message: string) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export { ForbiddenError };

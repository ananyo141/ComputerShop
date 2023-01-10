import { CustomApiError } from "./customApiError";
import { StatusCodes } from "http-status-codes";

class UnauthorizedError extends CustomApiError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export { UnauthorizedError };

import { CustomApiError } from "./customApiError";
import { StatusCodes } from "http-status-codes";

class BadRequestError extends CustomApiError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export { BadRequestError };

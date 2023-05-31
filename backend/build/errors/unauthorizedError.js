"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const customApiError_1 = require("./customApiError");
const http_status_codes_1 = require("http-status-codes");
class UnauthorizedError extends customApiError_1.CustomApiError {
  constructor(message) {
    super(message, http_status_codes_1.StatusCodes.UNAUTHORIZED);
  }
}
exports.UnauthorizedError = UnauthorizedError;

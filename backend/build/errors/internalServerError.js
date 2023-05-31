"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const customApiError_1 = require("./customApiError");
const http_status_codes_1 = require("http-status-codes");
class InternalServerError extends customApiError_1.CustomApiError {
  constructor(message) {
    super(message, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
exports.InternalServerError = InternalServerError;

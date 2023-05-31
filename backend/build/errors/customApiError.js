"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomApiError = void 0;
class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
exports.CustomApiError = CustomApiError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, _req, _res, _next) => {
  console.error(`Error ${err.statusCode}: ${err.message}`);
  return _res
    .status(err.statusCode)
    .json({ success: false, message: err.message });
};
exports.errorHandler = errorHandler;

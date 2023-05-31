"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFound = void 0;
const notFoundError_1 = require("../errors/notFoundError");
const routeNotFound = (_req, _res) => {
  throw new notFoundError_1.NotFoundError("Bad method or route does not exist");
};
exports.routeNotFound = routeNotFound;

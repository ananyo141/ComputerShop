"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError =
  exports.UnauthorizedError =
  exports.ForbiddenError =
  exports.BadRequestError =
  exports.NotFoundError =
    void 0;
const notFoundError_1 = require("./notFoundError");
Object.defineProperty(exports, "NotFoundError", {
  enumerable: true,
  get: function () {
    return notFoundError_1.NotFoundError;
  },
});
const badRequestError_1 = require("./badRequestError");
Object.defineProperty(exports, "BadRequestError", {
  enumerable: true,
  get: function () {
    return badRequestError_1.BadRequestError;
  },
});
const forbiddenError_1 = require("./forbiddenError");
Object.defineProperty(exports, "ForbiddenError", {
  enumerable: true,
  get: function () {
    return forbiddenError_1.ForbiddenError;
  },
});
const unauthorizedError_1 = require("./unauthorizedError");
Object.defineProperty(exports, "UnauthorizedError", {
  enumerable: true,
  get: function () {
    return unauthorizedError_1.UnauthorizedError;
  },
});
const internalServerError_1 = require("./internalServerError");
Object.defineProperty(exports, "InternalServerError", {
  enumerable: true,
  get: function () {
    return internalServerError_1.InternalServerError;
  },
});

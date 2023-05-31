"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getProduct = void 0;
const http_status_codes_1 = require("http-status-codes");
const productModel_1 = __importDefault(require("../models/productModel"));
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
exports.getProduct = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productModel_1.default.findOne({
      _id: _req.params.id,
    });
    _res.status(http_status_codes_1.StatusCodes.OK).json(product);
  })
);
exports.getAllProducts = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel_1.default.find();
    _res.status(http_status_codes_1.StatusCodes.OK).json(products);
  })
);

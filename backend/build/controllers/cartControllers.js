"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
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
exports.deleteUserCart =
  exports.patchUserCart =
  exports.addUserCart =
  exports.getUserCart =
    void 0;
const http_status_codes_1 = require("http-status-codes");
const userModel_1 = __importDefault(require("../models/userModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
const CustomError = __importStar(require("../errors/"));
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
const calculateTotal_1 = __importDefault(require("../utils/calculateTotal"));
exports.getUserCart = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(_req.user);
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    _res
      .status(http_status_codes_1.StatusCodes.OK)
      .json(
        Object.assign(
          { cart: user.cart },
          (0, calculateTotal_1.default)(user.cartTotal)
        )
      );
  })
);
exports.addUserCart = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(_req.user);
    const product = yield productModel_1.default
      .findById(_req.body.product)
      .select("price");
    if (!product)
      return _next(new CustomError.NotFoundError("Product not found"));
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    user.cart.push(_req.body);
    user.cartTotal += product.price * _req.body.amount;
    yield user.save();
    _res
      .status(http_status_codes_1.StatusCodes.CREATED)
      .json((0, calculateTotal_1.default)(user.cartTotal));
  })
);
exports.patchUserCart = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userId = _req.user;
    const productId = _req.params.prod_id;
    let user = yield userModel_1.default.findById(userId);
    const productInfo = yield productModel_1.default
      .findById(productId)
      .select("price");
    if (!productInfo)
      return _next(new CustomError.NotFoundError("Product not found"));
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const product = user.cart.find((item) => item.product.equals(productId));
    if (!product)
      return _next(new CustomError.NotFoundError("Product not found in cart"));
    const prevAmount = product.amount;
    product.amount = _req.body.amount;
    user.cartTotal += (product.amount - prevAmount) * productInfo.price;
    user = yield user.save();
    _res
      .status(http_status_codes_1.StatusCodes.OK)
      .json((0, calculateTotal_1.default)(user.cartTotal));
  })
);
exports.deleteUserCart = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userId = _req.user;
    const productId = _req.params.prod_id;
    let user = yield userModel_1.default.findById(userId);
    const product = yield productModel_1.default
      .findById(productId)
      .select("price");
    if (!product)
      return _next(new CustomError.NotFoundError("Product not found"));
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const index = user.cart.findIndex((item) => item.product.equals(productId));
    user.cartTotal -= product.price * user.cart[index].amount;
    user.cart.splice(index, 1);
    user = yield user.save();
    _res
      .status(http_status_codes_1.StatusCodes.OK)
      .json((0, calculateTotal_1.default)(user.cartTotal));
  })
);

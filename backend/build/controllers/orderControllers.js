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
exports.deleteUserOrder =
  exports.addUserOrder =
  exports.getUserOrder =
  exports.getUserOrders =
    void 0;
const http_status_codes_1 = require("http-status-codes");
const productModel_1 = __importDefault(require("../models/productModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const CustomError = __importStar(require("../errors/"));
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
const calculateTotal_1 = __importDefault(require("../utils/calculateTotal"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.getUserOrders = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(_req.user).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    _res.status(http_status_codes_1.StatusCodes.OK).json(user.orders);
  })
);
exports.getUserOrder = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(_req.user).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const order = user.orders.find((item) => {
      var _a;
      return (_a = item._id) === null || _a === void 0
        ? void 0
        : _a.equals(_req.params.order_id);
    });
    if (!order) return _next(new CustomError.NotFoundError("Order not found"));
    _res.status(http_status_codes_1.StatusCodes.OK).json(order);
  })
);
exports.addUserOrder = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let user = yield userModel_1.default.findById(_req.user);
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const cartProducts = yield productModel_1.default.populate(user.cart, {
      path: "product",
    });
    const { subtotal, shippingCost, tax, total } = (0,
    calculateTotal_1.default)(user.cartTotal);
    const newOrder = {
      shippingDetails: _req.body,
      orderItems: cartProducts.map((item) => {
        return {
          imgLink: item.product.imgLink,
          name: item.product.name,
          price: item.product.price,
          seller: item.product.seller,
          desc: item.product.desc,
          quantity: item.amount,
        };
      }),
      payment: {
        transactionId: yield bcrypt_1.default.hash(
          `${user._id}${Date.now()}`,
          2
        ),
        subtotal: subtotal,
        tax: tax,
        shippingCost: shippingCost,
        total: total,
      },
    };
    user.orders.push(newOrder);
    user.cart.splice(0, user.cart.length);
    user.cartTotal = 0;
    user = yield user.save();
    _res
      .status(http_status_codes_1.StatusCodes.CREATED)
      .json(user.orders[user.orders.length - 1]);
  })
);
exports.deleteUserOrder = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let user = yield userModel_1.default.findById(_req.user).select("orders");
    if (!user) return _next(new CustomError.NotFoundError("User not found"));
    const index = user.orders.findIndex((item) => {
      var _a;
      return (_a = item._id) === null || _a === void 0
        ? void 0
        : _a.equals(_req.params.order_id);
    });
    if (index === -1)
      return _next(new CustomError.NotFoundError("Order not found"));
    user.orders.splice(index, 1);
    user = yield user.save();
    _res.status(http_status_codes_1.StatusCodes.OK).json(user.orders);
  })
);

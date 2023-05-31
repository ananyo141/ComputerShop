"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticateToken_1 = require("../middleware/authenticateToken");
const userControllers_1 = require("../controllers/userControllers");
const cartControllers_1 = require("../controllers/cartControllers");
const orderControllers_1 = require("../controllers/orderControllers");
exports.userRouter = express_1.default.Router();
exports.userRouter
  .route("/profile")
  .get(authenticateToken_1.authenticateToken, userControllers_1.getUserInfo)
  .patch(authenticateToken_1.authenticateToken, userControllers_1.patchUser)
  .delete(authenticateToken_1.authenticateToken, userControllers_1.deleteUser);
exports.userRouter
  .route("/cart")
  .get(authenticateToken_1.authenticateToken, cartControllers_1.getUserCart)
  .post(authenticateToken_1.authenticateToken, cartControllers_1.addUserCart);
exports.userRouter
  .route("/cart/:prod_id")
  .patch(authenticateToken_1.authenticateToken, cartControllers_1.patchUserCart)
  .delete(
    authenticateToken_1.authenticateToken,
    cartControllers_1.deleteUserCart
  );
exports.userRouter
  .route("/orders")
  .get(authenticateToken_1.authenticateToken, orderControllers_1.getUserOrders)
  .post(authenticateToken_1.authenticateToken, orderControllers_1.addUserOrder);
exports.userRouter
  .route("/orders/:order_id")
  .get(authenticateToken_1.authenticateToken, orderControllers_1.getUserOrder)
  .delete(
    authenticateToken_1.authenticateToken,
    orderControllers_1.deleteUserOrder
  );

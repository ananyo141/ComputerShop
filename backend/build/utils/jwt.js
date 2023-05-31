"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.genAccessToken = exports.createUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = __importDefault(require("../utils/environment"));
const createUserToken = (user) => {
  return { userId: user._id, userEmail: user.email };
};
exports.createUserToken = createUserToken;
const genAccessToken = (user) => {
  const userToken = (0, exports.createUserToken)(user);
  return jsonwebtoken_1.default.sign(
    userToken,
    environment_1.default.ACCESS_TOKEN_SECRET
  );
};
exports.genAccessToken = genAccessToken;

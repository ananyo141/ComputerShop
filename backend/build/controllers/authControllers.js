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
exports.logoutController =
  exports.registerController =
  exports.loginController =
    void 0;
const http_status_codes_1 = require("http-status-codes");
const jwt_1 = require("../utils/jwt");
const userModel_1 = __importDefault(require("../models/userModel"));
const CustomErrors = __importStar(require("../errors"));
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
exports.loginController = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = _req.body;
    if (!email || !password)
      return _next(
        new CustomErrors.BadRequestError("Please provide email and password")
      );
    const user = yield userModel_1.default.findOne({ email: email });
    if (!user)
      return _next(
        new CustomErrors.NotFoundError("Invalid email or user does not exist")
      );
    if (yield user.comparePassword(password, _next)) {
      const accessToken = (0, jwt_1.genAccessToken)(user);
      _res.status(http_status_codes_1.StatusCodes.OK).json({
        name: user.name,
        email: user.email,
        accessToken: accessToken,
      });
    } else {
      return _next(new CustomErrors.UnauthorizedError("Invalid password"));
    }
  })
);
exports.registerController = (0, asyncWrapper_1.default)((_req, _res, _next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!_req.body.name || !_req.body.email || !_req.body.password)
      return _next(
        new CustomErrors.BadRequestError("Please provide all required fields")
      );
    let user = yield userModel_1.default.findOne({
      email: _req.body.email,
    });
    if (user)
      return _next(new CustomErrors.BadRequestError("User already exists"));
    else {
      user = yield userModel_1.default.create(_req.body);
      const accessToken = (0, jwt_1.genAccessToken)(user);
      _res
        .status(http_status_codes_1.StatusCodes.CREATED)
        .json({ name: user.name, email: user.email, accessToken: accessToken });
    }
  })
);
exports.logoutController = (0, asyncWrapper_1.default)((_req, _res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    _res.status(http_status_codes_1.StatusCodes.OK).json(_req.body);
  })
);

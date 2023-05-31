"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.MONGOURI = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("../utils/environment"));
exports.MONGOURI = environment_1.default.CONNECTIONSTR;
const connectDB = (mongoUri = exports.MONGOURI) => {
  mongoose_1.default.set("strictQuery", false);
  return mongoose_1.default.connect(mongoUri);
};
exports.connectDB = connectDB;

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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const cartSchema_1 = __importDefault(require("./schema/cartSchema"));
const wishlistSchema_1 = __importDefault(require("./schema/wishlistSchema"));
const orderSchema_1 = __importDefault(require("./schema/orderSchema"));
const userSchema = new mongoose_1.default.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  cart: {
    type: [cartSchema_1.default],
    default: [],
  },
  cartTotal: {
    type: Number,
    default: 0,
  },
  orders: {
    type: [orderSchema_1.default],
    default: [],
  },
  wishlist: {
    type: [wishlistSchema_1.default],
    default: [],
  },
});
userSchema.pre("save", function () {
  return __awaiter(this, void 0, void 0, function* () {
    const user = this;
    if (!user.isModified("password")) return;
    const salt = yield bcrypt_1.default.genSalt(10);
    const hash = yield bcrypt_1.default.hash(user.password, salt);
    user.password = hash;
  });
});
userSchema.methods.comparePassword = function (candidatePassword, next) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield bcrypt_1.default
      .compare(candidatePassword, this.password)
      .catch(next);
  });
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;

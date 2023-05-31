"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
  imgLink: String,
  name: String,
  price: Number,
  seller: String,
  desc: String,
  inStock: Number,
});
exports.default = mongoose_1.default.model("Product", ProductSchema);

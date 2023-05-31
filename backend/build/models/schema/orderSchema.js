"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OrderItemSchema = new mongoose_1.default.Schema(
  {
    imgLink: String,
    name: String,
    price: Number,
    seller: String,
    desc: String,
    quantity: Number,
  },
  { _id: false }
);
const PaymentSchema = new mongoose_1.default.Schema(
  {
    transactionId: String,
    subtotal: Number,
    tax: Number,
    shippingCost: Number,
    total: Number,
  },
  { _id: false }
);
const ShippingDetails = new mongoose_1.default.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: String,
    state: String,
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { _id: false }
);
const OrderSchema = new mongoose_1.default.Schema(
  {
    shippingDetails: ShippingDetails,
    orderItems: [OrderItemSchema],
    payment: PaymentSchema,
  },
  { timestamps: true }
);
exports.default = OrderSchema;

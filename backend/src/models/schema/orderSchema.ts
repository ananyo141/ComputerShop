import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema(
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

const PaymentSchema = new mongoose.Schema(
  {
    transactionId: String,
    subtotal: Number,
    tax: Number,
    shippingCost: Number,
    total: Number,
  },
  { _id: false }
);

const ShippingDetails = new mongoose.Schema(
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

const OrderSchema = new mongoose.Schema(
  {
    shippingDetails: ShippingDetails,
    orderItems: [OrderItemSchema],
    payment: PaymentSchema,
  },
  { timestamps: true }
);

export default OrderSchema;

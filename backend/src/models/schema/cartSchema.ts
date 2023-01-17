import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
});

export default CartSchema;

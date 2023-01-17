import mongoose from "mongoose";

import CartSchema from "./schema/cartSchema";
import WishlistSchema from "./schema/wishlistSchema";
import OrderSchema from "./schema/orderSchema";

const userSchema = new mongoose.Schema({
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
  // embed cart, wishlist, and order schemas
  cart: {
    type: [CartSchema],
    default: [],
  },
  orders: {
    type: [OrderSchema],
    default: [],
  },
  wishlist: {
    type: [WishlistSchema],
    default: [],
  },
});

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

import CartSchema from "./schema/cartSchema";
import WishlistSchema from "./schema/wishlistSchema";

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
  // embed cart and wishlist in user document
  cart: {
    type: [CartSchema],
    default: [],
  },
  wishlist: {
    type: [WishlistSchema],
    default: [],
  },
});

export default mongoose.model("User", userSchema);

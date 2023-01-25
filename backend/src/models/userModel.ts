import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt";

import CartSchema from "./schema/cartSchema";
import WishlistSchema from "./schema/wishlistSchema";
import OrderSchema from "./schema/orderSchema";
import { NextFunction } from "express";

// Type definitions for typescript
export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  cart: mongoose.Types.Array<any>;
  wishlist: mongoose.Types.Array<any>;
  orders: mongoose.Types.Array<any>;
  role: string;
  comparePassword: (
    candidatePassword: string,
    next: NextFunction
  ) => Promise<boolean>;
}

export interface UserModel extends Model<UserDocument> {}

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
  // user permissions
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
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

// Save hashed passwords to database
userSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

// utility function to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
  next: NextFunction
) {
  return await bcrypt.compare(candidatePassword, this.password).catch(next);
};

const User = mongoose.model<UserDocument, UserModel>("User", userSchema);
export default User;

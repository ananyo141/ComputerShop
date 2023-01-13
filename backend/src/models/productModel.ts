import mongoose from "mongoose";

export interface Product {
  imgLink: string;
  name: string;
  price: number;
  seller: string;
  desc: string;
  inStock: number;
}

const ProductSchema = new mongoose.Schema({
  imgLink: String,
  name: String,
  price: Number,
  seller: String,
  desc: String,
  inStock: Number,
});

export default mongoose.model("Product", ProductSchema);

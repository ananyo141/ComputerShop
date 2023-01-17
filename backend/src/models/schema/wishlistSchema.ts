import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
  products: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Product",
    required: true,
  },
});

export default WishlistSchema;

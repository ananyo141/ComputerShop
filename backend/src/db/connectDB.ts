import mongoose from "mongoose";

export default function (mongoUri: string): void {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(mongoUri)
    .then(() => console.info("Connected to DB"))
    .catch(() => console.error("Cannot connect to DB"));
}

import mongoose from "mongoose";

export default function connectDB(mongoUri: string): Promise<typeof mongoose> {
  mongoose.set("strictQuery", false);
  return mongoose.connect(mongoUri);
}

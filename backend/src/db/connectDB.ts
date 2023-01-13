import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

export const MONGOURI = process.env.CONNECTIONSTR!;

export const connectDB = (
  mongoUri: string = MONGOURI
): Promise<typeof mongoose> => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(mongoUri);
};

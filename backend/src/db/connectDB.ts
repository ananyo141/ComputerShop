import mongoose from "mongoose";

import env from "../utils/environment";

export const MONGOURI = env.CONNECTIONSTR!;

export const connectDB = (
  mongoUri: string = MONGOURI
): Promise<typeof mongoose> => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(mongoUri);
};

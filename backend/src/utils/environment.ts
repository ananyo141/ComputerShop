import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const env = {
  // Compulsory environment variables
  PORT: process.env.PORT ?? 3000,
  DBUSER: process.env.DBUSER!,
  DBPASSWORD: process.env.DBPASSWORD!,
  CONNECTIONSTR: process.env.CONNECTIONSTR!,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
};

export default env;

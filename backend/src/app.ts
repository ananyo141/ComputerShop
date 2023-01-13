import express from "express";
import dotenv from "dotenv";
import path from "path";

import { productRouter } from "./routes/productRoutes";
import { userRouter } from "./routes/userRoutes";
import { authRouter } from "./routes/authRoutes";
import { routeNotFound } from "./middleware/routeNotFound";
import { errorHandler } from "./middleware/errorHandler";

import { PORT, BASEURL } from "./constants";
import { connectDB } from "./db/connectDB";

// Parse .env file
dotenv.config({ path: path.join(__dirname, ".env") });

// Use express app
const app: express.Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(`${BASEURL}/auth`, authRouter);
app.use(`${BASEURL}/users`, userRouter);
app.use(`${BASEURL}/products`, productRouter);

// Custom middleware
app.use(routeNotFound);
app.use(errorHandler);

const port = process.env.PORT || PORT;
const start = async () => {
  try {
    // connect to database
    await connectDB();
    // Server setup
    app.listen(port, () => {
      console.log(`Server listening on: http://localhost:${port}/`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();

import express from "express";
import cors from "cors";

import env from "./utils/environment";
import { productRouter } from "./routes/productRoutes";
import { userRouter } from "./routes/userRoutes";
import { authRouter } from "./routes/authRoutes";
import { routeNotFound } from "./middleware/routeNotFound";
import { errorHandler } from "./middleware/errorHandler";

import { PORT, BASEURL } from "./constants";
import { connectDB } from "./db/connectDB";

// Use express app
const app: express.Application = express();
const port = env.PORT || PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      `http://localhost:${port}`,
      "https://computershop-ananyo.onrender.com",
    ],
  })
);

// Routes
app.use(`${BASEURL}/auth`, authRouter);
app.use(`${BASEURL}/users`, userRouter);
app.use(`${BASEURL}/products`, productRouter);

// Custom middleware
app.use(routeNotFound);
app.use(errorHandler);

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

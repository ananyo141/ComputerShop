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

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use(`${BASEURL}/auth`, authRouter);
app.use(`${BASEURL}/users`, userRouter);
app.use(`${BASEURL}/products`, productRouter);

// Custom middleware
app.use(routeNotFound);
app.use(errorHandler);

const port = env.PORT || PORT;
try {
  // connect to database
  connectDB();
  // Server setup
  app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}/`);
  });
} catch (error) {
  console.error(error);
}

import express from "express";
import dotenv from "dotenv";
import path from "path";

import { productRouter } from "./routes/productRoutes";
import { userRouter } from "./routes/userRoutes";
import { notFound } from "./middleware/notFound";
import { PORT, BASEURL } from "./constants";
import connectDB from "./db/connectDB";

// Parse .env file
dotenv.config({ path: path.join(__dirname, ".env") });

// Use express app
const app: express.Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRouter);
app.use("/users", userRouter);

// Handling '/' Request
app.get("/", (_req, _res) => {
  _res.status(404).send({ error: `Use ${BASEURL} to access endpoints` });
});

// Custom middleware
app.use(notFound);

const port = process.env.PORT || PORT;
const start = async () => {
  try {
    // connect to database
    await connectDB(process.env.CONNECTIONSTR!);
    // Server setup
    app.listen(port, () => {
      console.log(`Server listening on: http://localhost:${port}/`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();

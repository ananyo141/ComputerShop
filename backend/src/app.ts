import express from "express";
import dotenv from "dotenv";

import { PORT, BASEURL } from "./constants";
import connectDB from "./db/connectDB";

dotenv.config({ path: __dirname + "/.env" });

// connect to database
connectDB(process.env.CONNECTIONSTR!);

// Use express app
const app: express.Application = express();

// middlewares
app.use(express.json());

// Handling '/' Request
app.get("/", (_req, _res) => {
  _res.status(404).send({ error: `Use ${BASEURL} to access endpoints` });
});

// Server setup
app.listen(PORT, () => {
  console.log(`Server listening on:
         http://localhost:${PORT}/`);
});

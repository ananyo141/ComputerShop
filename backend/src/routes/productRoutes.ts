import express from "express";

import { getAllProducts, getProduct } from "../controllers/productControllers";

export const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProduct);

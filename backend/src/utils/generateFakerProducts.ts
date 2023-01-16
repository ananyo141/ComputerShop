import { faker } from "@faker-js/faker/locale/en";
import ProductModel, { ProductType } from "../models/productModel";
import { connectDB } from "../db/connectDB";

const createRandomProduct = (): ProductType => ({
  imgLink: faker.image.technics(640, 480, true),
  name: faker.commerce.productName(),
  price: parseInt(faker.commerce.price(2, 200, 2, "")),
  seller: faker.company.name(),
  desc: faker.commerce.productDescription(),
  inStock: parseInt(faker.random.numeric(2)),
});

const PRODUCTS: ProductType[] = Array.from({ length: 20 }, createRandomProduct);

const generate = async () => {
  try {
    // connect to database
    await connectDB();
    await ProductModel.insertMany(PRODUCTS);
    console.log(PRODUCTS);
    console.info("Products generated successfully");
  } catch (error) {
    console.error(error);
  }
};

generate();

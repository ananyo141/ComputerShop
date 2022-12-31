import { faker } from "@faker-js/faker/locale/en";

import { Product, ProductStorageObjectType } from "../models/Product";

const PRODUCTS: ProductStorageObjectType = {};

const createRandomProduct = (): Product => ({
  imgLink: faker.image.technics(640, 480, true),
  name: faker.commerce.productName(),
  price: parseInt(faker.commerce.price(2, 200, 2, "")),
  seller: faker.company.name(),
  desc: faker.commerce.productDescription(),
  inStock: parseInt(faker.random.numeric(2)),
});

Array.from({ length: 20 }).forEach(() => {
  PRODUCTS[faker.datatype.uuid()] = createRandomProduct();
});

export default PRODUCTS;

"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const en_1 = require("@faker-js/faker/locale/en");
const productModel_1 = __importDefault(require("../models/productModel"));
const connectDB_1 = require("./connectDB");
const createRandomProduct = () => ({
  imgLink: en_1.faker.image.technics(640, 480, true),
  name: en_1.faker.commerce.productName(),
  price: parseInt(en_1.faker.commerce.price(2, 200, 2, "")),
  seller: en_1.faker.company.name(),
  desc: en_1.faker.commerce.productDescription(),
  inStock: parseInt(en_1.faker.random.numeric(2)),
});
const PRODUCTS = Array.from({ length: 20 }, createRandomProduct);
const generate = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const connection = yield (0, connectDB_1.connectDB)();
      yield productModel_1.default.insertMany(PRODUCTS);
      console.log(PRODUCTS);
      console.info("Products generated successfully");
      connection.disconnect();
    } catch (error) {
      console.error(error);
    }
  });
generate();

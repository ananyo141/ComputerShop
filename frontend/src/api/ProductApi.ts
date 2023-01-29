import axios from "axios";

import { resolve } from "../utils/Resolve";
import { PRODUCTURL } from "../api/Routes";
import { Product } from "../models/Product";

export const getAllProducts = async (): Promise<any> => {
  const [error, response] = await resolve(axios.get(PRODUCTURL));
  if (error) {
    throw error;
  }
  const productsArr: Product[] = response.data;
  // convert the products array to an object with id as key
  const productsObj = productsArr.reduce((map: any, product: Product) => {
    map[product._id] = product;
    return map;
  }, {});
  return productsObj;
};

export const getProduct = async (id: string): Promise<any> => {
  const [error, response] = await resolve(axios.get(`${PRODUCTURL}/${id}`));
  if (error) {
    throw error;
  }
  return response.data;
};

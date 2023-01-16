import axios from "axios";

import { resolve } from "../utils/Resolve";
import { PRODUCTURL } from "../api/Routes";

export const getAllProducts = async (): Promise<any> => {
  const [error, response] = await resolve(axios.get(PRODUCTURL));
  if (error) {
    throw error;
  }
  return response.data;
};

export const getProduct = async (id: string): Promise<any> => {
  const [error, response] = await resolve(axios.get(`${PRODUCTURL}/${id}`));
  if (error) {
    throw error;
  }
  return response.data;
};

import axios from "axios";

import { resolve } from "../utils/Resolve";
import { USERSURL } from "../api/Routes";

const CARTURL = USERSURL + "/cart";

export const addToCart = async (
  productId: string,
  amount: number
): Promise<any> => {
  const [error, response] = await resolve(
    axios.post(
      `${CARTURL}/`,
      { product: productId, amount: amount },
      {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    )
  );
  if (error) {
    throw error;
  }
  return response.data;
};

export const updateCart = async (
  productId: string,
  amount: number
): Promise<any> => {
  const [error, response] = await resolve(
    axios.patch(
      `${CARTURL}/${productId}`,
      { amount: amount },
      {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    )
  );
  if (error) {
    throw error;
  }
  return response.data;
};

export const removeFromCart = async (productId: string): Promise<any> => {
  const [error, response] = await resolve(
    axios.delete(`${CARTURL}/${productId}`, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
  );
  if (error) {
    throw error;
  }
  return response.data;
};

export const getCart = async (): Promise<any> => {
  const [error, response] = await resolve(
    axios.get(`${CARTURL}`, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
  );
  if (error) {
    throw error;
  }
  return response.data.cart;
};

import axios from "axios";

import { resolve } from "../utils/Resolve";
import { USERSURL } from "../api/Routes";

const CARTURL = USERSURL + "/cart";

export const addToCart = async (
  productId: string,
  amount: number,
  accessToken: string
): Promise<any> => {
  const [error, response] = await resolve(
    axios.post(
      `${CARTURL}/`,
      { product: productId, amount: amount },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
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
  amount: number,
  accessToken: string
): Promise<any> => {
  const [error, response] = await resolve(
    axios.patch(
      `${CARTURL}/${productId}`,
      { amount: amount },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    )
  );
  if (error) {
    throw error;
  }
  return response.data;
};

export const removeFromCart = async (
  productId: string,
  accessToken: string
): Promise<any> => {
  const [error, response] = await resolve(
    axios.delete(`${CARTURL}/${productId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
  );
  if (error) {
    throw error;
  }
  return response.data;
};

export const getCart = async (accessToken: string): Promise<any> => {
  const [error, response] = await resolve(
    axios.get(`${CARTURL}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
  );
  if (error) {
    throw error;
  }
  const cartArr = response.data.cart;
  // convert cart array to an object with id as key
  const cartObj = cartArr.reduce((map: any, cart: any) => {
    map[cart.product] = cart.amount;
    return map;
  }, {});
  return {
    ...response.data,
    cart: cartObj,
  };
};

import axios from "axios";

import { resolve } from "../utils/Resolve";
import { USERSURL } from "../api/Routes";
import { ShippingDetails } from "../state/features/orders/orderTypes";

const ORDERURL = USERSURL + "/orders";

export const getOrders = async (accessToken: string): Promise<any> => {
  const [error, response] = await resolve(
    axios.get(ORDERURL, {
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

export const createOrder = async (
  accessToken: string,
  shippingDetails: ShippingDetails
): Promise<any> => {
  const [error, response] = await resolve(
    axios.post(ORDERURL, shippingDetails, {
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

import jwt from "jsonwebtoken";

import { UserDocument } from "../models/userModel";
import env from "../utils/environment";

export const createUserToken = (user: UserDocument) => {
  return { name: user.name, userId: user._id, userEmail: user.email };
};

export const genAccessToken = (user: UserDocument) => {
  const userToken = createUserToken(user);
  return jwt.sign(userToken, env.ACCESS_TOKEN_SECRET);
};

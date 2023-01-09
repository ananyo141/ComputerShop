import express from "express";

export const loginController = (
  req: express.Request,
  res: express.Response
) => {
  console.info("Login called");
};

export const registerController = (
  req: express.Request,
  res: express.Response
) => {
  console.info("Register called");
};

export const logoutController = (
  req: express.Request,
  res: express.Response
) => {
  console.info("Logout called");
};

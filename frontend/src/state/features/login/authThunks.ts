import { createAsyncThunk } from "@reduxjs/toolkit";

import * as AuthApi from "../../../api/AuthApi";
import { resolve } from "../../../utils/Resolve";

export const ACCESS_TOKEN = "accessToken";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (payload: { email: string; password: string }, thunkAPI) => {
    const [error, response] = await resolve(
      AuthApi.login(payload.email, payload.password)
    );
    if (error) return thunkAPI.rejectWithValue(error.message);
    sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
    return response;
  }
);

export const registerUser = createAsyncThunk(
  "login/registerUser",
  async (
    payload: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    const [error, response] = await resolve(
      AuthApi.register(payload.name, payload.email, payload.password)
    );
    if (error) return thunkAPI.rejectWithValue(error.message);
    sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
    return response;
  }
);

export const loadLoginInfo = createAsyncThunk(
  "login/loadLoginInfo",
  async (_, thunkAPI) => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) return thunkAPI.rejectWithValue("No access token");
    const [error, response] = await resolve(AuthApi.getUserInfo(accessToken));
    if (error) return thunkAPI.rejectWithValue(error.message);
    return response;
  }
);

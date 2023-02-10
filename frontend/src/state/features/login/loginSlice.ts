import { createSlice } from "@reduxjs/toolkit";

import {
  loginUser,
  registerUser,
  loadLoginInfo,
  ACCESS_TOKEN,
} from "./authThunks";

interface LoginState {
  isLoggedIn: boolean;
  name: string | null;
  email: string | null;
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  name: null,
  email: null,
  accessToken: null,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (_) => {
      sessionStorage.removeItem(ACCESS_TOKEN);
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Something went wrong";
      });

    // Register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Something went wrong";
      });

    // Load login state after refresh
    builder
      .addCase(loadLoginInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadLoginInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loadLoginInfo.rejected, (_) => {
        return initialState;
      });
  },
});

export const { logout } = loginSlice.actions;
export { loginUser, registerUser, loadLoginInfo };
export default loginSlice.reducer;

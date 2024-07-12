import { createSlice } from "@reduxjs/toolkit";

const storedUserToken = localStorage.getItem("authUserToken");
const initialState = {
  token: storedUserToken ? JSON.parse(storedUserToken) : null,
};

const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      localStorage.setItem("authUserToken", JSON.stringify(action.payload));
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("authUserToken");
    },
  },
});

export const { login, logout } = authTokenSlice.actions;

export default authTokenSlice.reducer;

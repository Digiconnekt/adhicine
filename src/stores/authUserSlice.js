import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("authUser");
const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { addUser, removeUser } = authUserSlice.actions;

export default authUserSlice.reducer;

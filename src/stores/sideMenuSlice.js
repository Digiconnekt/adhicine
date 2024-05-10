import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      icon: "Home",
      pathname: "/",
      title: "Dashboard",
      show: {
        admin: true,
        hospital: false,
        doctor: false,
      },
    },
    {
      icon: "Home",
      pathname: "/hospital",
      title: "Dashboard",
      show: {
        admin: false,
        hospital: true,
        doctor: false,
      },
    },
    {
      icon: "Home",
      pathname: "/doctor",
      title: "Dashboard",
      show: {
        admin: false,
        hospital: false,
        doctor: true,
      },
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state) => state.sideMenu.menu;

export default sideMenuSlice.reducer;

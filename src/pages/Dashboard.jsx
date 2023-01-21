import React from "react";
import LeftMenuBar from "../components/LeftMenuBar";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <LeftMenuBar />

        <NavLink to="/" />
        <NavLink to="/add/:id" />
        <NavLink to="/report" />

        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;

import React, { useContext, useEffect, useState } from "react";
import LeftMenuBar from "../components/LeftMenuBar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../provider";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useContext(AppContext);
  const [validUser, setValidUser] = useState(false);

  useEffect(() => {
    user.accessToken ? setValidUser(true) : navigate("/sign-in");
  }, []);

  return (
    validUser && (
      <>
        <div className="flex overflow-hidden">
          <LeftMenuBar />

          <NavLink to="/" />
          <NavLink to="/add/:type" />
          <NavLink to="/report" />
          <NavLink to="/machine-logs" />
          <NavLink to="/patient-requests" />
          <NavLink to="/hospital/:id" />
          <NavLink to="/hospital/:id/add/:type" />
          <NavLink to="/account" />

          <Outlet />
        </div>
      </>
    )
  );
};

export default Dashboard;

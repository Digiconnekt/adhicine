import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Report from "./pages/Report";
import Error from "./pages/Error";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardContent from "./components/DashboardContent";

const App = () => {
  const location = window.location.pathname;

  return (
    <>
      <ScrollToTop />
      {location !== "/sign-up" && location !== "/sign-in" && <Header />}

      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/add/:id" element={<Add />} />
          <Route path="/report" element={<Report />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LeftMenuBar from "./components/LeftMenuBar";
import ScrollToTop from "./components/ScrollToTop";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Report from "./pages/Report";
import Error from "./pages/Error";

const App = () => {
  const location = window.location.pathname;

  return (
    <>
      <ScrollToTop />
      {location !== "/sign-up" && location !== "/sign-in" && <Header />}

      <div className="flex overflow-hidden">
        {location !== "/sign-up" && location !== "/sign-in" && <LeftMenuBar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/add/:id" element={<Add />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>

      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;

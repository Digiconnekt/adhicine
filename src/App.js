import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LeftMenuBar from "./components/LeftMenuBar";
import ScrollToTop from "./components/ScrollToTop";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="flex overflow-hidden">
        <LeftMenuBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add/:id" element={<Add />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

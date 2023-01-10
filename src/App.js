import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LeftMenuBar from "./components/LeftMenuBar";
import AddDoctor from "./pages/AddDoctor";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden">
        <LeftMenuBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

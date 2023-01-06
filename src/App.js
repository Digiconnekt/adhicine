import React from "react";
import "./App.css";
import Header from "./components/Header";
import LeftMenuBar from "./components/LeftMenuBar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden">
        <LeftMenuBar />
        <Dashboard />
      </div>
    </>
  );
};

export default App;

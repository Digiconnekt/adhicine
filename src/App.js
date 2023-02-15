import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Report from "./pages/Report";
import Error from "./pages/Error";
import "react-toastify/dist/ReactToastify.css";
import DashboardContent from "./components/DashboardContent";
import MachineLogs from "./pages/MachineLogs";
import ForgotPassword from "./pages/ForgotPassword";
import { AppContext } from "./provider";
import PatientRequests from "./pages/PatientRequests";
import HospitalDetails from "./pages/HospitalDetails";

const App = () => {
  const user = useContext(AppContext);

  return (
    <>
      <ScrollToTop />

      {user.accessToken && <Header />}

      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/add/:type" element={<Add />} />
          <Route path="/report" element={<Report />} />
          <Route path="/machine-logs" element={<MachineLogs />} />
          <Route path="/patient-requests" element={<PatientRequests />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;

import { useRoutes } from "react-router-dom";

import SideMenu from "../layouts/SideMenu";

import Admin from "../pages/Admin";
import Hospital from "../pages/Hospital";
import CreateHospital from "../pages/Hospital/Create";
import Doctor from "../pages/Doctor";
import CreateDoctor from "../pages/Doctor/Create";
import Patient from "../pages/Patient";
import CreatePatient from "../pages/Patient/Create";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import Error404 from "../pages/Error404";
import Settings from "../pages/Settings";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Admin />,
        },
        {
          path: "/hospital",
          element: <Hospital />,
        },
        // {
        //   path: "/hospital/create",
        //   element: <CreateHospital />,
        // },
        {
          path: "/doctor/:doctorId?",
          element: <Doctor />,
        },
        {
          path: "/doctor/create",
          element: <CreateDoctor />,
        },
        {
          path: "/patient/:patientId?",
          element: <Patient />,
        },
        {
          path: "/patient/create",
          element: <CreatePatient />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password/:token",
      element: <ResetPassword />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ];

  return useRoutes(routes);
}

export default Router;

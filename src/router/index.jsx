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

import Error404 from "../pages/Error404";

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
          path: "/hospital/:hospitalId?",
          element: <Hospital />,
        },
        {
          path: "/hospital/create",
          element: <CreateHospital />,
        },
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
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ];

  return useRoutes(routes);
}

export default Router;

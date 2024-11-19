// src/router/routesConfig.js
import { createBrowserRouter } from "react-router-dom";
import AttachBands from "../pages/AttachBands";
import DetectBands from "../pages/DetectBands";
import Home from "../pages/Home/Home";
import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import Courses from "../pages/Courses/Courses";
import PagePreferences from "../pages/preferences/PagePreferences";
import UserInfo from "../pages/preferences/components/UserInfo";
import UserSecurity from "../pages/preferences/components/UserSecurity";
import UserPrivacity from "../pages/preferences/components/UserPrivacity";
import PaymentMethods from "../pages/preferences/components/PaymentMethods";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/detect-bands",
    element: <ProtectedRoute></ProtectedRoute>,
    children: [{ path: "/detect-bands", element: <DetectBands></DetectBands> }],
  },{
    path: "/attach-bands",
    element: <ProtectedRoute></ProtectedRoute>,
    children: [{ path: "/attach-bands", element: <AttachBands></AttachBands> }],
  },
  {
    path: "/preferences",
    element: <ProtectedRoute></ProtectedRoute>,
    children: [{ path: "/preferences", element: <PagePreferences></PagePreferences>, children:[
      {index: true, element: <UserInfo />},
      {path: "user-info", element: <UserInfo></UserInfo>},
      {path: "security", element: <UserSecurity></UserSecurity>},
      {path: "privacity", element: <UserPrivacity></UserPrivacity>},
      {path: "payment-methods", element: <PaymentMethods></PaymentMethods>}

    ] }],
  },
]);

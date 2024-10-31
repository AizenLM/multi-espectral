// src/router/routesConfig.js
import { createBrowserRouter } from "react-router-dom";
import AttachBands from "../pages/AttachBands";
import DetectBands from "../pages/DetectBands";
import Home from "../pages/Home/Home";
import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";

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
    path: "/detect-bands",
    element: <ProtectedRoute></ProtectedRoute>,
    children: [{ path: "/detect-bands", element: <DetectBands></DetectBands> }],
  },{
    path: "/attach-bands",
    element: <ProtectedRoute></ProtectedRoute>,
    children: [{ path: "/attach-bands", element: <AttachBands></AttachBands> }],
  },
]);

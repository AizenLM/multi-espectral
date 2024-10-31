import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routesConfig";
import { AuthProvider } from "./auth/AuthProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

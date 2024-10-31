import { Outlet, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log("is authenticated ", isAuthenticated);
  return isAuthenticated ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
};

export default ProtectedRoute;

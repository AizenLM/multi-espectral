import React from "react";
import { Route, Routes } from "react-router-dom";
import AttachBands from "../pages/AttachBands";
import DetectBands from "../pages/DetectBands";
import Home from "../pages/Home/Home";
import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";

function RouterNav() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/detect-bands" element={<DetectBands></DetectBands>}></Route>
      <Route path="/attach-bands" element={<AttachBands></AttachBands>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}> </Route>
    </Routes>
  );
}
export default RouterNav;

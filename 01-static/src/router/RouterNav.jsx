import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AttachBands from "../pages/AttachBands";
import DetectBands from "../pages/DetectBands";
import Login from "../auth/Login";
import Register from "../auth/register";

function RouterNav(props) {
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

RouterNav.propTypes = {};

export default RouterNav;

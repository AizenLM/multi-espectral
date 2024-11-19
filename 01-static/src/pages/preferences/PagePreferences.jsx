import React, { Children } from "react";
import Layout from "../../layout/Layout";
import { useAuth } from "../../auth/AuthProvider";
import "./styles-preferences.css";
import { Link, NavLink, Outlet } from "react-router-dom";
const PagePreferences = ({ children }) => {
  const { infoUser } = useAuth();
  console.log(infoUser);
  return (
    <Layout>
      <div className="content-user">
        <div className="side-nav">
          <div>
            <h1>
              Bienvenido, {infoUser.firstName} {infoUser.lastName}!
            </h1>
            <hr />
          </div>
          <div>
            <ul>
              <NavLink
                to={"user-info"}
                className={({ isActive }) => (isActive ? "a-user-active" : "no-active")}
              >
                Informacion Personal
              </NavLink>
              <NavLink
                to={"security"}
                className={({ isActive }) => (isActive ? "a-user-active" : "no-active")}
              >
                Seguridad
              </NavLink>
              <NavLink
                to={"privacity"}
                className={({ isActive }) => (isActive ? "a-user-active" : "no-active")}
              >
                Privacidad
              </NavLink>
              <NavLink
                to={"payment-methods"}
                className={({ isActive }) => (isActive ? "a-user-active" : "no-active")}
              >
                Métodos de pago
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <Outlet></Outlet>
        </div>
      </div>
    </Layout>
  );
};

export default PagePreferences;

import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import ContentLogin from "./ContentLogin";
import Login from "../../auth/pages/Login";

function NavBar() {
  const { isAuthenticated, infoUser } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const logout = () => {

  }
  const toggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };

  const renderUserMenu = () => {
    return (
      <div className="user-menu">
        <p><strong>{infoUser.firstName} {infoUser.lastName}</strong></p>
        <p className="email">Email: {infoUser.email}</p>
        <hr />
        <NavLink to="/my-courses">Mis cursos</NavLink>
        <NavLink to="/preferences">Preferencias</NavLink>
        <NavLink to="/profile">Información Personal</NavLink>
        <button onClick={logout} className="logout-button">
          Cerrar sesión
        </button>
      </div>
    );
  };

  useEffect(() => {}, [isAuthenticated, navigate]);
  const renderAuthLinks = () => {
    return isAuthenticated ? (
      <ContentLogin firstName={infoUser.firstName} />
    ) : (
      <NavLink
        to={"/login"}
        className={({ isActive }) => (isActive ? "a-active" : "")}
      >
        Iniciar sesión
      </NavLink>
    );
  };
  return (
    <nav>
      <div>
        <Link className="title" to={"/"}>
          ESPECTRAL
        </Link>
      </div>
      <div>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "a-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/courses"}
            className={({ isActive }) => (isActive ? "a-active" : "")}
          >
            Cursos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/detect-bands"}
            className={({ isActive }) => (isActive ? "a-active" : "")}
          >
            Detectar Bandas
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/attach-bands"}
            className={({ isActive }) => (isActive ? "a-active" : "")}
          >
            Adjuntar Bandas
          </NavLink>
        </li>
        <li>
        {isAuthenticated ? (
            <div className="user-profile" onClick={toggleUserMenu}>
              {infoUser.firstName}
              {showUserMenu && renderUserMenu()}
            </div>
          ) : (
            <NavLink to={"/login"} className={({ isActive }) => (isActive ? "a-active" : "")}>Iniciar sesión</NavLink>
          )}
        </li>
      </div>
    </nav>
  );
}

export default NavBar;

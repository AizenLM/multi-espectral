import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link className="title" to={"/"}>ESPECTRAL</Link>
      </div>
      <div>
        <li>
          <NavLink to={"/"} className={({ isActive }) => isActive ? 'a-active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/detect-bands'} className={({ isActive }) => isActive ? 'a-active' : ''}>Detectar Bandas</NavLink>
        </li>
        <li>
          <NavLink to={'/attach-bands'} className={({ isActive }) => isActive ? 'a-active' : ''}>Adjuntar Bandas</NavLink>
        </li>
        <li>
          <NavLink to={'/login'} className={({ isActive }) => isActive ? 'a-active' : ''}>Login</NavLink>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;

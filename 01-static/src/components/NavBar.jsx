import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link className="title" to={"/"}>Multi-Espectral</Link>
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
      </div>
    </nav>
  );
}

export default NavBar;

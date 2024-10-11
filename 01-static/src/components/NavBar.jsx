import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link className="title" to={"/"}>Multi-Espectral</Link>
      </div>
      <div>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={'/detect-bands'}>Detectar Bandas</Link>
        </li>
        <li>
        <Link to={'/attach-bands'}>Adjuntar Bandas</Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;

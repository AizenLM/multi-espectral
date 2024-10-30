import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="content-login">
      <form className="form-login">
        <h1>Sign in to ESPECTRAL</h1>
        <label htmlFor="username">Ingresa usuario</label>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username"
        />
        <label htmlFor="password">Ingresa tu contraseña</label>
        <input type="password" name="password" id="" placeholder="Password" />
        <button>Ingresar</button>
        <div>
          <span>Nuevo en Multi-Espectral: </span>
          <Link to={'/register'}>Crear cuenta</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

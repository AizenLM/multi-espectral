import { Link } from "react-router-dom";
const Register = () =>{
    return(
        <div className="content-login">
        <form className="form-login">
          <h1>Crear nueva cuenta</h1>
          <hr />
          <label htmlFor="username">Ingresa tu nombre</label>
          <input
            type="text"
            name="username"
            id=""
            placeholder="Username"
          />
          <label htmlFor="email">Correo</label>
          <input
            type="text"
            name="username"
            id=""
            placeholder="correo@dominio.com"
          />
          <label htmlFor="password">Ingresa tu contraseña</label>
          <input type="password" name="password" id="" placeholder="Password" />
          <label htmlFor="password">Confirma tu contraseña</label>
          <input type="password" name="password" id="" placeholder="Password" />
          <button>Registrarse</button>
          <div>
            <Link>Ingresar</Link>
          </div>
        </form>
      </div>
    );
    
} 
export default Register;
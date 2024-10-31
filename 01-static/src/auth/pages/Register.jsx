import { useState } from "react";
import { json, Link, Navigate, useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useAuth } from "../AuthProvider";
import { API_URL } from "../constans";
import AlertError from "../../components/alerts/AlertError";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState();
  const auth = useAuth();
  const goTo = useNavigate()
  if (auth.isAuthenticated) return <Navigate to={"/"}></Navigate>;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });
      if (response.ok) {
        console.log("Se creo el usuario correctamente");
        setMessageError('')
        goTo('/login')
      } else {
        const { body } = await response.json();
        setMessageError(body.error);
      }
    } catch (eror) {
      console.log(eror);
    }
  };

  return (
    <>
      <Layout>
        <div className="content-login">
          <form className="form-login" onSubmit={handleSubmit}>
            <h1>Crear nueva cuenta</h1>
            <hr />
            <label htmlFor="FirstName">Ingresa tu nombre</label>
            <input
              type="text"
              name="FirstName"
              placeholder="Nombre"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="LastName">Ingresa tus apellidos</label>
            <input
              type="text"
              name="LastName"
              placeholder="Apellidos"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="correo@dominio.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Ingresa tu contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Confirma tu contraseña</label>
            <input type="password" name="password" placeholder="Password" />
            <button>Registrarse</button>
            <div>
              <Link>Ingresar</Link>
            </div>
            {messageError && <AlertError message={messageError} />}
          </form>
        </div>
      </Layout>
    </>
  );
};
export default Register;

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import Layout from "../../layout/Layout";
import AlertError from "../../components/alerts/AlertError";
import { API_URL } from "../constans";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const auth = useAuth();
  const goTo = useNavigate();
  const [messageError, setMessageError] = useState();

  if(auth.isAuthenticated)return <Navigate to={'/'}></Navigate>

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        console.log("Acceso correcto");
        const json = await response.json();
        if(json.body.accessToken && json.body.refreshToken){
          auth.saveUser(json);
        }
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
   <Layout>
     <div className="content-login animate__animated animate__bounceInUp">
      <form className="form-login" onSubmit={handleSubmit}>
        <h1>Sign in to ESPECTRAL</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label htmlFor="password">Ingresa tu contraseña</label>
        <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button>Ingresar</button>
        <div>
          <span>Nuevo en Espectral: </span>
          <Link to={'/register'}>Crear cuenta</Link>
        </div>
       {messageError && <AlertError message={messageError}></AlertError>}
      </form>
    </div>
   </Layout>
  );
}

export default Login;

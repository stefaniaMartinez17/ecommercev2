import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./inicio.css";
import Profile from "./UserProf";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className="banner">
        <div className="banner__text">
          <h1> TIENDA DE MUEBLES </h1>
          <h2> Bienvenido </h2>
          <p>
            Nos complace darte la bienvenida a nuestra tienda de muebles, donde
            el estilo y la calidad se encuentran en perfecta armonía. Aquí
            encontrarás todo lo que necesitas para crear el hogar de tus sueños.
          </p>
          <button className="BtnLogin" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default LoginButton;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [envioExitoso, setEnvioExitoso] = useState(false);
  const [mostrarErrores, setMostrarErrores] = useState(false);
  const [errores, setErrores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = () => {
      const nuevosErrores = [];
      if (!correoValido(correo)) {
        nuevosErrores.push("Correo no Valido");
      }
      if (password.trim() === "") {
        nuevosErrores.push("Contraseña es requerida");
      } else if (password.length < 6) {
        nuevosErrores.push("Contraseña mayor a 6 caracteres");
      }
      setErrores(nuevosErrores);
    };
    if (mostrarErrores) {
      usuario();
    }
  }, [correo, password, mostrarErrores]);

  const correoValido = (correo) => {
    const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w{2,4})+$/;
    return re.test(correo);
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    setMostrarErrores(true);

    if (
      errores.length === 0 &&
      correo.trim() === "admin@gmail.com" &&
      password.trim() === "Hola123"
    ) {
      setEnvioExitoso(true);
    }
  };

  return (
    <div>
      <form onSubmit={enviarFormulario}>
        <div className="inputContainer">
          <label htmlFor="nombre">Correo: </label>
          <input
            type="email"
            id="correo"
            value={correo}
            placeholder="Ingresa correo"
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="">Contraseña: </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Ingresa Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"> Iniciar</button>
      </form>
      {mostrarErrores && errores.length > 0 && (
        <div className="errors">
          <h3> Errores : </h3>
          <ul>
            {errores.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {envioExitoso && navigate("/cart") && (
        <div className="message">INGRESO A ADMIN</div>
      )}
    </div>
  );
};

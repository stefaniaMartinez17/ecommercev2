import React, { useState, useEffect } from "react";
import database from "../../productos.json";
import "./Admin.css";

function FuncionesAdm() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    // Intenta obtener los datos modificados de localStorage al cargar el componente
    const savedData = localStorage.getItem("modifiedData");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      setData(database);
    }
  }, []);

  const modificarInformacion = (id) => {
    const elemento = data.find((item) => item.id === id);
    if (elemento) {
      elemento.nombre = nombre;
      elemento.precio = parseInt(precio);
      const newData = [...data];
      setData(newData);
      setNombre("");
      setPrecio("");
      // Guarda los datos modificados en localStorage
      localStorage.setItem("modifiedData", JSON.stringify(newData));
    }
  };

  return (
    <>
      <h2 className="funciontitulo">Acceso a Productos</h2>
      {data.map((item) => (
        <div className="administrar" key={item.id}>
          <div className="Datos1">
            <p>ID: {item.id}</p>
            <p>Nombre: {item.nombre}</p>
            <p>Precio: {item.precio}</p>
          </div>
          <img src={item.imagen} alt={item.nombre} />
          <form className="FormAdmin">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nuevo nombre"
            />
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Nuevo precio"
            />
            <button type="button" onClick={() => modificarInformacion(item.id)}>
              Modificar información
            </button>
          </form>
        </div>
      ))}
    </>
  );
}

export default FuncionesAdm;

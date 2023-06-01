import React, { useContext } from "react";
import { PRODUCTOS } from "../../productos";
import Producto from "./Productos";
import "./shop.css";

function Tienda() {
  return (
    <div className="tienda">
      <div className="tiendaTitle">
        <h1> Tienda de muebles </h1>
      </div>
      <div className="productosEs">
        {PRODUCTOS.map((producto) => (
          <Producto key={producto.id} data={producto} />
        ))}
      </div>
    </div>
  );
}

export default Tienda;

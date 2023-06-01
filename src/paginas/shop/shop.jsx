import React, { useContext } from "react";
import productos from "../../assets/img/productos.json";
import Producto from "./Productos";
import "./shop.css";

function Tienda() {
  return (
    <div className="tienda">
      <div className="tiendaTitle">
        <h1> DecoMuebles </h1>
      </div>
      <div className="productosEs">
        {productos.map((producto) => (
          <Producto key={producto.id} data={producto} />
        ))}
      </div>
    </div>
  );
}

export default Tienda;

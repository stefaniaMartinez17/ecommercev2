import React, { useContext } from "react";
import productos from "../../productos.json";
import Producto from "./Productos";
import "./shop.css";

function Tienda() {
  return (
    <div className="tienda">
      <div className="Shop_Banner">
        <div className="tiendaTitle">
          <h1> DecoMuebles </h1>
        </div>
        <div className="tiendaDesc">
          <p>
            Especialistas en muebles de calidad y diseño. Transformamos tus
            espacios en hogares acogedores. Amplia selección de sofás y sillas.
            Asesoramiento personalizado y servicio excepcional. ¡Descubre una
            nueva forma de vivir tu espacio en Decomuebles!
          </p>
        </div>
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

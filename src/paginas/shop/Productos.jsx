import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";

function Producto(props) {
  const { id, nombre, precio, imagen } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="productoCu">
      <img src={imagen} />
      <div className="descripciónProd">
        <p>{nombre}</p>
        <p>${precio.toLocaleString("es-CO")}</p>
      </div>
      <button className="btn_agregar" onClick={() => addToCart(id)}>
        Agregar al carrito {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        {/*if cartItemAmount is greater than 0 then display the actual cartItemAmount*/}
      </button>
    </div>
  );
}

export default Producto;

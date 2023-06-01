import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import "./CartItem.css";

export const CartItem = (props) => {
  const { id, nombre, precio, imagen } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={imagen} />
      <div className="descripciónCart">
        <p>{nombre}</p>
        <p>${precio.toLocaleString("es-CO")}</p>
        <div className="AñadirOEliminar">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

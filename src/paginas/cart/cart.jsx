import React, { useContext } from "react";
import { PRODUCTOS } from "../../productos";
import { ShopContext } from "../../context/shop_context";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./CartItem.css";

export const Carrito = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="carrito">
      <div>
        <h2> Tu carrito de compras</h2>
      </div>
      <div className="itemsCarrito">
        {PRODUCTOS.map((producto) => {
          if (cartItems[producto.id] !== 0) {
            return <CartItem key={producto.id} data={producto} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total a Pagar: ${totalAmount} Pesos </p>
          <button onClick={() => navigate("/shop")}>
            {" "}
            continuar comprado{" "}
          </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Comprar Ahora{" "}
          </button>
        </div>
      ) : (
        <h3> Tu carro esta vació</h3>
      )}
    </div>
  );
};

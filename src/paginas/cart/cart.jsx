import React, { useContext } from "react";
import productos from "../../productos.json";
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
        {productos.map((producto) => {
          if (cartItems[producto.id] !== 0) {
            return <CartItem key={producto.id} data={producto} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total a Pagar: ${totalAmount.toLocaleString("es-CO")} Pesos </p>
          <button onClick={() => navigate("/")}>continuar comprado</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Comprar Ahora
          </button>
        </div>
      ) : (
        <h3> Tu carro esta vació</h3>
      )}
    </div>
  );
};

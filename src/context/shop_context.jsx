import { createContext, useEffect, useState } from "react";
import { PRODUCTOS } from "../productos";

export const ShopContext = createContext(null);

{
  /*how many items with this id there are in the cart*/
}
const inicialStateItems = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTOS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

{
  /*componente proveedor del contexto*/
}

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const cartItemsFromStorage = localStorage.getItem("cartItems");
    if (cartItemsFromStorage) {
      return JSON.parse(cartItemsFromStorage);
    } else {
      return inicialStateItems();
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTOS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.precio;
      }
    }
    return totalAmount.toLocaleString("es-CO");
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  {
    /*previous value of the state - crea un nuevo objeto que actualiza el valor de una propiedad específica del estado anterior.{ ...prev } utiliza el operador de propagación (...) para crear una copia superficial (shallow copy) del estado anterior. Esto se hace para evitar mutar directamente el estado anterior y seguir el principio de inmutabilidad en React.*/
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(inicialStateItems);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import productos from "../productos.json";

export const ShopContext = createContext(null);

const inicialStateItems = () => {
  let cart = {};
  for (let i = 0; i < productos.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

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
        let itemInfo = productos.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.precio;
      }
    }
    return totalAmount;
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

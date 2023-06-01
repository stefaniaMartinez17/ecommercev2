import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import Tienda from "./paginas/shop/shop";
import { Carrito } from "./paginas/cart/cart";
import { ShopContextProvider } from "./context/shop_context";
import Inicio from "./Login/Inicio";
import Autenticado from "./Login/Autenticado";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Autenticado />;
  } else {
    return <Inicio />;
  }
}
export default App;

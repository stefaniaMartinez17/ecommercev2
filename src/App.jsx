import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import Tienda from "./paginas/shop/shop";
import { Carrito } from "./paginas/cart/cart";
import { ShopContextProvider } from "./context/shop_context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          {/*Va a estar en todas las rutas*/}
          <Navbar />
          <Routes>
            {/* lo que pongas aquí depende de la ruta en la que estés*/}
            <Route path="/shop" Component={Tienda} />
            <Route path="/cart" Component={Carrito} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

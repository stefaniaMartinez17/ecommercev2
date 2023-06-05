import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { logout } = useAuth0();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="./../../public/img/LOGO_ECCOMERCE2.png"
          alt="Logo de la empresa"
        ></img>
        <p>DecoMuebles</p>
      </div>
      <div className="links">
        {/*links para navegar en la pagina*/}
        <Link to="/shop">Tienda</Link>
        {/*to="" donde vas a ir cuando das click en el link*/}
        <Link to="/cart"> Carrito </Link>
      </div>
      <div>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

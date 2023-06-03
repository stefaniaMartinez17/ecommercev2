import React from "react";
import ReactDOM from "react-dom/client";
import Inicio from "./Login/Inicio";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3yy0ueoklmwzve8u.us.auth0.com"
    clientId="IdXKE0B1Q4MuaYjv3CQjj8LW5yIUy96l"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

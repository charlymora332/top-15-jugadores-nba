import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContenedorJugadoresProvider } from "./context/ContenedorJugadores";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContenedorJugadoresProvider>
      <App />
    </ContenedorJugadoresProvider>
  </React.StrictMode>
);

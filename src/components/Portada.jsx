import React from "react";
import JugadoreFormulario from "./JugadoreFormulario";

function Portada() {
  return (
    <div className="h-[100vh] items-center flex flex-col justify-center w-[25vw] px-[1rem] bg-red-700  text-center ">
      <h1 className="font-black text-4xl">
        Top 15 Mejores Jugadores de la nba
      </h1>

      <h3 className="my-[3rem] font-semibold text-2xl">
        Ingresa tu jugador Favorito
      </h3>
      <JugadoreFormulario />
    </div>
  );
}

export default Portada;

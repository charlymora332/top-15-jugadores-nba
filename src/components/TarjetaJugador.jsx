import React from "react";
import { useContext } from "react";
import { ContenedorJugadores } from "../context/ContenedorJugadores";
import Button from "./Button";

function TarjetaJugador({ jugador }) {
  const { eliminarJugador } = useContext(ContenedorJugadores);

  return (
    <div className="tarjeta relative   w-full flex flex-col items-center bg-blue-300 rounded-3xl pb-[1rem]  hover:bg-blue-400 hover:scale-105 ">
      <div className="img">
        <img src={jugador.foto} alt="" />
      </div>
      <br />
      <div className="flex flex-col justify-between  text-black font-medium text-2xl flex-grow  items-center text-center">
        {jugador.nombre} <br />
        {jugador.posicion} {"\u00A0\u00A0\u00A0\u00A0 "} {jugador.altura}
        <br />
        {jugador.up} <br />
        {jugador.equipo} <br />
        <Button
          onClick={() => eliminarJugador(jugador.id)}
          texto="Eliminar"
          className="bg-red-600 hover:bg-red-800"
        />
      </div>
    </div>
  );
}

export default TarjetaJugador;

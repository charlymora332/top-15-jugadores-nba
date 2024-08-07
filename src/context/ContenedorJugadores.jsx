import { createContext, useState, useEffect } from "react";
import { jugadores as info } from "../data/lista";

export const ContenedorJugadores = createContext();

export function ContenedorJugadoresProvider(props) {
  const [jugadores, setJugadores] = useState([]);

  function crearJugador(jugador) {
    setJugadores([
      ...jugadores,
      {
        id: jugadores.length,
        nombre: jugador.nombre,
        posicion: jugador.posicion,
        altura: jugador.altura,
        up: jugador.up,
        equipo: jugador.equipo,

        foto: jugador.foto,
      },
    ]);
  }

  function eliminarJugador(jugadorId) {
    setJugadores(jugadores.filter((jugador) => jugador.id !== jugadorId));
  }

  useEffect(() => {
    setJugadores(info);
  }, []);

  return (
    <ContenedorJugadores.Provider
      value={{
        jugadores,
        crearJugador,
        eliminarJugador,
      }}
    >
      {" "}
      {props.children}
    </ContenedorJugadores.Provider>
  );
}

export default ContenedorJugadores;

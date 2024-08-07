import "./App.css";
import JugadoresListados from "./components/JugadoresListados";

import React from "react";
import JugadoreFormulario from "./components/JugadoreFormulario";
import Portada from "./components/Portada";

function Principal() {
  // const [jugadores, setJugadores] = useState([]);

  // useEffect(() => {
  //   setJugadores(info);
  // }, []);

  // function eliminarJugador(jugadorId){

  //   setJugadores(jugadores.filter(jugador =>jugador.id !== jugadorId))

  //  }

  // function crearJugador(jugador) {
  //   setJugadores([...jugadores,
  //     {
  //     id: jugadores.length,
  //     nombre: jugador.nombre,
  //     posicion: jugador.posicion,
  //     altura: jugador.altura,
  //     up: jugador.up,
  //     equipo: jugador.equipo,

  //     foto: jugador.foto

  //     }

  //   ])
  // }

  return (
    <div className="bg-blue-200  flex h-[100vh]">
      <Portada />
      <JugadoresListados />
    </div>
  );
}

export default Principal;

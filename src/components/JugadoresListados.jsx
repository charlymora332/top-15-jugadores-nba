import "../App.css";
import ContenedorJugadores from "../context/ContenedorJugadores";
import { useContext } from "react";
import TarjetaJugador from "./TarjetaJugador";
//imp import moduleName from 'module'
//clg console.log(object)
//rfce componente

// import TarjetaJugador from './TarjetaJugador'
function listaDeTareas() {
  const { jugadores } = useContext(ContenedorJugadores);

  if (jugadores.length === 0) {
    return <h1>no hay jugadores creados</h1>;
  }
  // w-[75vw] flex flex-grap bg-red-600 gap-11
  return (
    <div className="grid grid-cols-3 gap-6 p-[5rem]  h-[100vh] w-[75vw] bg-slate-600 overflow-y-scroll">
      {jugadores.map((jugador) => (
        <TarjetaJugador key={jugador.id} jugador={jugador} />
      ))}
    </div>
  );
}

export default listaDeTareas;

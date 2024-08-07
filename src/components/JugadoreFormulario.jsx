import { useState, useContext } from "react";
import { ContenedorJugadores } from "../context/ContenedorJugadores";
import Entrada from "./Entrada";

import Button from "./Button";

function JugadoreFormulario() {
  const [nombre, setNombre] = useState("");
  const [posicion, setPosicion] = useState("");
  const [altura, setAltura] = useState("");
  const [up, setUp] = useState("");
  const [equipo, setEquipo] = useState("");
  const [foto, setFoto] = useState("");

  const { crearJugador } = useContext(ContenedorJugadores);

  const agregarJugador = (e) => {
    e.preventDefault();
    crearJugador({ nombre, posicion, altura, up, equipo, foto });
    setNombre("");
    setPosicion("");
    setAltura("");
    setUp("");
    setEquipo("");
    setFoto("");
  };

  return (
    <form
      onSubmit={agregarJugador}
      className=" flex flex-col w-[100%]  items-center"
    >
      <Entrada
        type="text"
        placeholder="Nombre del jugador"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />

      <Entrada
        type="text"
        placeholder="Posicion del jugador"
        onChange={(e) => setPosicion(e.target.value)}
        value={posicion}
      />
      <Entrada
        type="number"
        placeholder="Altura del jugador"
        onChange={(e) => setAltura(e.target.value)}
        value={altura}
      />
      <Entrada
        type="text"
        placeholder="Habilidad del jugador"
        onChange={(e) => setUp(e.target.value)}
        value={up}
      />
      <Entrada
        type="text"
        placeholder="Equipo del jugador"
        onChange={(e) => setEquipo(e.target.value)}
        value={equipo}
      />
      <Entrada
        type="url"
        placeholder="URL de la foto del jugador"
        onChange={(e) => setFoto(e.target.value)}
        value={foto}
      />
      <Button
        texto="Guardar"
        className="bg-green-500 hover:bg-green-700 text-black text-xl"
      />
    </form>
  );
}

export default JugadoreFormulario;

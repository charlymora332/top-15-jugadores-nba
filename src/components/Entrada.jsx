import React from "react";

function Entrada(props) {
  return (
    <input
      className="bg-blue-300 focus:ring-2  text-slate-950 font-medium placeholder-slate-800 px-2 py-1 m-1 w-full rounded-lg focus:bg-blue-500 focus:border-purple-600 border-none outline-none focus:ring-white 
      "
      {...props}
    />
  );
}

export default Entrada;

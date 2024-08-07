import React from "react";

function Button({ texto = "", className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-700 text-white px-3 py-1.5 rounded-xl ${className} w-[8rem] font-bold mt-[1rem]  `}
    >
      {texto}
    </button>
  );
}

export default Button;

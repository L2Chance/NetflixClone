import { useState } from "react";
import netflixLogo from "../../assets/netflix-logo.svg";
import fotoPerfil from "../../assets/messi-perfil.jpg";
import lupaBuscador from "../../assets/lupa.svg";

type NavbarProps = {
  onBuscar: (valor: string) => void;
  ocultar?: boolean;
};

export default function Navbar({ onBuscar, ocultar = false }: NavbarProps) {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  const toggleBuscador = () => setMostrarBuscador((prev) => !prev);

  return (
    <>
      <div
        className={`
          flex justify-between w-full h-20 bg-black/20 absolute z-50 p-10
          ${ocultar ? "hidden" : ""}
        `}
      >
        {/* Sección izquierda */}
        <section className="flex justify-center items-center gap-3">
          <img src={netflixLogo} alt="Logo-Netflix" className="w-20 h-20" />
          <p className="text-xl font-family-roboto text-white">|</p>
          <p className="text-2xl texto-light">Perez Lautaro Ivan</p>
        </section>

        {/* Sección derecha */}
        <section className="flex justify-center items-center gap-6 relative">
          <button onClick={toggleBuscador} aria-label="Toggle search input">
            <img src={lupaBuscador} alt="Buscar" className="w-8 h-8" />
          </button>

          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            className="w-12 h-12 object-cover rounded-full"
          />

          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => onBuscar(e.target.value)}
            autoFocus
            className={`
              absolute right-30 bg-black text-white p-2 rounded-md w-64 border border-white
              transform origin-top-right
              transition-all duration-300 ease-in-out
              ${
                mostrarBuscador
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }
            `}
          />
        </section>
      </div>
    </>
  );
}

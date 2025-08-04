import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../../assets/netflix-logo.svg";
import fotoPerfil from "../../assets/messi-perfil.jpg";
import { SearchIcon, NotificationsIcon } from "../../components/Icons";
import { Link } from "react-router-dom";

type NavbarProps = {
  ocultar?: boolean;
  onBuscar: (termino: string) => void;
};

export default function Navbar({ ocultar = false }: NavbarProps) {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const toggleBuscador = () => setMostrarBuscador((prev) => !prev);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMostrarNotificaciones(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMostrarNotificaciones(false);
    }, 400);
  };

  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value.trim();
    if (valor.length > 0) {
      navigate(`/buscar?query=${encodeURIComponent(valor)}`);
    }
  };

  return (
    <div
      className={`
        flex justify-between w-full h-14 bg-black/20 absolute z-50 px-6 py-3
        ${ocultar ? "hidden" : ""}
      `}
    >
      {/* Sección izquierda */}
      <Link
        to="/"
        className="flex justify-center items-center gap-2 cursor-pointer"
      >
        <img src={netflixLogo} alt="Logo-Netflix" className="w-12 h-12" />
        <p className="text-lg font-family-roboto text-white">|</p>
        <p className="text-lg texto-light">Perez Lautaro Ivan</p>
      </Link>

      {/* Enlaces de navegación */}
      <section className="flex justify-center items-center gap-6">
        <Link to="/" className="text-white hover:underline texto-semibold">
          Inicio
        </Link>
        <Link
          to="/favoritos"
          className="text-white hover:underline texto-semibold"
        >
          Favoritos
        </Link>
        <Link
          to="/category/todos"
          className="text-white hover:underline texto-semibold"
        >
          Categorías
        </Link>
        <Link to="/crear" className="text-white hover:underline texto-semibold">
          Nueva Película
        </Link>
      </section>

      {/* Sección derecha */}
      <section className="flex justify-center items-center gap-4 relative">
        {/* Botón de buscador */}
        <button onClick={toggleBuscador} aria-label="Toggle search input">
          <SearchIcon color="white" className="w-5 h-5 cursor-pointer" />
        </button>

        {/* Notificaciones */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NotificationsIcon color="white" className="w-5 h-5 cursor-pointer" />

          {mostrarNotificaciones && (
            <div className="flex justify-center items-center absolute top-10 right-0 w-100 h-35 p-4 rounded-md border-t border-white bg-gray-950 text-white shadow-lg z-50 transition-all duration-300 ease-in-out hover:bg-gray-950/50">
              <p className="text-sm">No hay notificaciones recientes</p>
            </div>
          )}
        </div>

        {/* Foto de perfil */}
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="w-8 h-8 object-cover rounded-full"
        />

        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar..."
          onChange={handleBuscar}
          autoFocus
          className={`
            absolute right-30 bg-black text-white p-1 rounded-md w-48 border border-white
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
  );
}

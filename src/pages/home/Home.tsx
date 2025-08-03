import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { movieService } from "../../recursos/service";
import PrincipalPeliculaCard from "../../components/PrincipalPeliculaCard";
import BusquedaPeliculaCard from "../../components/BusquedaPeliculaCard";
import DescripcionPelicula from "./DescripcionPelicula";
import ContenedorPeliculas from "../../components/ContenedorPeliculas";
import ContenedorPeliculasBusqueda from "../../components/ContenedorPeliculasBusqueda";
import BotonCirculo from "../../components/BotonCirculo";
import type { Pelicula } from "../../recursos/peliculas";

type HomeProps = {
  terminoBusqueda: string;
};

export default function Home({ terminoBusqueda }: HomeProps) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener películas del servicio ---
  useEffect(() => {
    const fetchPeliculas = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await movieService.getAllMovies();
        setPeliculas(data);
      } catch (err) {
        setError("No se pudieron cargar las películas.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPeliculas();
  }, []);

  // --- Lógica existente para el hover ---
  const [hoverPelicula, setHoverPelicula] = useState<{
    id: number;
    x: number;
    y: number;
  } | null>(null);
  const [isHoverVisible, setIsHoverVisible] = useState(false);
  const hoverActiveRef = useRef(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    hoverActiveRef.current = isHoverVisible;
  }, [isHoverVisible]);

  const intentarOcultarHover = () => {
    setIsHoverVisible(false);
    hideTimeoutRef.current = setTimeout(() => {
      if (!hoverActiveRef.current) {
        setHoverPelicula(null);
      }
    }, 500);
  };

  const handleMouseEnter = (coords: { id: number; x: number; y: number }) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

    if (contenedorRef.current) {
      const rect = contenedorRef.current.getBoundingClientRect();
      const relativeX = coords.x - rect.left;
      const relativeY = coords.y - rect.top;

      const cardWidth = 400;
      const contenedorWidth = rect.width;

      let adjustedX = relativeX;
      if (relativeX + cardWidth > contenedorWidth) {
        adjustedX = contenedorWidth - cardWidth - 20;
        if (adjustedX < 0) adjustedX = 0;
      }

      setHoverPelicula({ id: coords.id, x: adjustedX, y: relativeY });
    } else {
      setHoverPelicula(coords);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setIsHoverVisible(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    intentarOcultarHover();
  };

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const termino = terminoBusqueda.toLowerCase();
    return (
      pelicula.titulo.toLowerCase().includes(termino) ||
      pelicula.generos.some((g) => g.toLowerCase().includes(termino))
    );
  });

  // --- Componentes y Refs existentes ---
  type SliderRef = {
    next: () => void;
    prev: () => void;
    moveBy: (slides: number) => void;
  };

  const popularRef = useRef<SliderRef>(null);
  const belicoRef = useRef<SliderRef>(null);
  const romanceRef = useRef<SliderRef>(null);
  const animacionRef = useRef<SliderRef>(null);

  const NavegacionSlider = ({
    onPrev,
    onNext,
  }: {
    onPrev: () => void;
    onNext: () => void;
  }) => (
    <>
      <button
        onClick={onPrev}
        className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 items-center justify-center text-white text-xl z-30 shadow-md bg-black/30 hover:bg-white/10 transition"
        aria-label="Anterior"
      >
        ⤺
      </button>
      <button
        onClick={onNext}
        className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 items-center justify-center text-white text-xl z-30 shadow-md bg-black/30 hover:bg-white/10 transition"
        aria-label="Siguiente"
      >
        ⤼
      </button>
    </>
  );

  const peliculaHover = hoverPelicula
    ? peliculas.find((p) => p.id === hoverPelicula.id)
    : null;

  // --- Renderizado de la UI ---
  if (isLoading) {
    return (
      <div className="text-white text-center mt-20">Cargando películas...</div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-20">{error}</div>;
  }

  return (
    <div ref={contenedorRef} className="relative animate-fade">
      <DescripcionPelicula />

      <div className="flex flex-col justify-center gap-10 relative px-2 sm:px-4">
        {terminoBusqueda ? (
          <>
            <h1 className="texto-bold text-lg sm:text-xl ml-1 sm:ml-3">
              RESULTADOS DE BÚSQUEDA
            </h1>
            <ContenedorPeliculasBusqueda>
              {peliculasFiltradas.map((pelicula) => (
                <BusquedaPeliculaCard
                  key={pelicula.id}
                  url={pelicula.imagen}
                  titulo={pelicula.titulo}
                />
              ))}
            </ContenedorPeliculasBusqueda>
          </>
        ) : (
          <>
            {[
              {
                titulo: "POPULAR ESTA SEMANA",
                ref: popularRef,
                filtro: () => true,
              },
              {
                titulo: "BÉLICO",
                ref: belicoRef,
                filtro: (p: Pelicula) => p.generos.includes("Bélica"),
              },
              {
                titulo: "ACCIÓN",
                ref: romanceRef,
                filtro: (p: Pelicula) => p.generos.includes("Acción"),
              },
              {
                titulo: "AVENTURA",
                ref: animacionRef,
                filtro: (p: Pelicula) => p.generos.includes("Aventura"),
              },
            ].map(({ titulo, ref, filtro }) => (
              <div key={titulo}>
                <h1 className="texto-bold text-lg sm:text-xl ml-1 sm:ml-3">
                  {titulo}
                </h1>
                <div className="relative">
                  <ContenedorPeliculas ref={ref}>
                    {peliculas.filter(filtro).map((pelicula) => (
                      <PrincipalPeliculaCard
                        key={pelicula.id}
                        idPelicula={pelicula.id}
                        url={pelicula.imagen}
                        titulo={pelicula.titulo}
                        onHover={handleMouseEnter}
                        onLeave={handleMouseLeave}
                        onClick={() => navigate(`/pelicula/${pelicula.id}`)}
                      />
                    ))}
                  </ContenedorPeliculas>
                  <NavegacionSlider
                    onPrev={() => ref.current?.prev()}
                    onNext={() => ref.current?.next()}
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {hoverPelicula && (
        <div
          className={`absolute z-[100] w-[90vw] sm:w-[400px] rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-2xl ${
            isHoverVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          style={{
            top: hoverPelicula.y,
            left: hoverPelicula.x,
            backgroundColor: "#141414",
          }}
          onMouseEnter={() => {
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            setIsHoverVisible(true);
          }}
          onMouseLeave={intentarOcultarHover}
        >
          {peliculaHover && (
            <>
              <img
                src={peliculaHover.imagen}
                alt={peliculaHover.titulo}
                className="w-full h-40 sm:h-56 object-cover"
              />
              <div className="p-4 text-white text-sm sm:text-base space-y-2">
                <h2 className="font-bold text-lg sm:text-xl">
                  {peliculaHover.titulo}
                </h2>
                <BotonCirculo></BotonCirculo>
                <div className="flex items-center gap-2 flex-wrap text-xs font-medium">
                  <span className="bg-white text-black px-2 py-0.5 rounded">
                    10+
                  </span>
                  <span className="opacity-70">
                    {peliculaHover.duracion ?? "1h 39min"}
                  </span>
                  <span className="border border-white px-1 rounded">HD</span>
                </div>
                <p className="italic opacity-70 text-xs sm:text-sm">
                  {peliculaHover.generos.join(" · ")}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

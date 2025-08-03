import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BotonNetflix from "../components/BotonNetflix";
import { movieService } from "../recursos/service"; // Importa el servicio
import type { Pelicula } from "../recursos/peliculas"; // Importa la interfaz Pelicula

export default function PeliculaDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [pelicula, setPelicula] = useState<Pelicula | null>(null);
  const [peliculasSimilares, setPeliculasSimilares] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imagenCargada, setImagenCargada] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setImagenCargada(false); // Reiniciar cuando cambia la película

    const fetchPelicula = async () => {
      if (!id) {
        setError("ID de película no proporcionado.");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const peliculaEncontrada = await movieService.getMovieById(Number(id));
        setPelicula(peliculaEncontrada);

        // Obtener y filtrar películas similares después de cargar la principal
        const todasLasPeliculas = await movieService.getAllMovies();
        const similares = todasLasPeliculas
          .filter((p) => p.id !== peliculaEncontrada.id)
          .slice(0, 6);
        setPeliculasSimilares(similares);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Película no encontrada.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPelicula();
  }, [id]);

  if (isLoading) {
    return (
      <div className="p-4 text-center text-white mt-20">
        Cargando película...
      </div>
    );
  }

  if (error) {
    return <div className="p-4 text-center text-red-500 mt-20">{error}</div>;
  }

  // Si pelicula es null después de la carga y sin error, algo salió mal
  if (!pelicula) {
    return (
      <div className="p-4 text-center text-red-500 mt-20">
        No se pudo cargar la información de la película.
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${pelicula.imagenPresentacion})` }}
      ></div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/60 to-black"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 py-20 flex flex-col gap-10 items-center sm:items-start animate-fade-up animate-ease-in-out">
        {!imagenCargada && (
          <div className="w-full sm:w-[1000px] h-[560px] bg-neutral-800 rounded shadow-lg animate-pulse" />
        )}

        <img
          loading="lazy"
          src={pelicula.imagenPresentacion}
          alt={pelicula.titulo}
          className={`w-full sm:w-[1000px] rounded shadow-lg object-cover transition-opacity duration-300 ${
            imagenCargada ? "opacity-100" : "opacity-0 absolute -z-10"
          }`}
          onLoad={() => setImagenCargada(true)}
        />

        {imagenCargada && (
          <>
            <BotonNetflix
              onClick={() => navigate(`/pelicula/${pelicula.id}/play`)}
            >
              Ver trailer
            </BotonNetflix>

            <div className="flex-1 w-full animate-fade-up animate-ease-in-out">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {pelicula.titulo}
              </h1>

              <div className="flex items-center gap-2 text-sm mb-4 flex-wrap">
                <span className="border border-white rounded px-2 py-0.5">
                  16+
                </span>
                <span className="bg-white text-black font-semibold px-2 py-0.5 rounded">
                  HD
                </span>
                <span className="text-white/70">
                  {pelicula.duracion ?? "2h 10min"}
                </span>
              </div>

              <p className="text-sm sm:text-base mb-4 leading-relaxed">
                {pelicula.sinopsis}
              </p>

              <p className="text-sm sm:text-base mb-6">
                <span className="font-semibold">Géneros:</span>{" "}
                {pelicula.generos.join(" · ")}
              </p>

              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-3">Capturas</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-gray-700 h-32 sm:h-40 rounded-lg animate-pulse"
                    />
                  ))}
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-xl font-semibold mb-3">
                  Más títulos similares a este
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {peliculasSimilares.map((p) => (
                    <div
                      key={p.id}
                      className="cursor-pointer group"
                      onClick={() => navigate(`/pelicula/${p.id}`)}
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={p.imagen}
                          alt={p.titulo}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="mt-2 text-sm text-center text-white opacity-90 group-hover:opacity-100 transition">
                        {p.titulo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

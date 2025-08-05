import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BotonNetflix from "../components/BotonNetflix";
import { movieService } from "../recursos/service";
import type { Pelicula } from "../recursos/peliculas";
import { favoritosService } from "../recursos/favoritosService";

export default function PeliculaDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [pelicula, setPelicula] = useState<Pelicula | null>(null);
  const [peliculasSimilares, setPeliculasSimilares] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [esFavorita, setEsFavorita] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
        setEsFavorita(favoritosService.isFavorite(peliculaEncontrada.id));

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
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="animate-spin h-12 w-12 border-4 border-red-600 rounded-full border-t-transparent mb-4" />
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 text-center text-red-500 mt-20">{error}</div>;
  }

  if (!pelicula) {
    return (
      <div className="p-4 text-center text-red-500 mt-20">
        No se pudo cargar la información de la película.
      </div>
    );
  }

  const toggleFavorito = () => {
    if (pelicula) {
      if (esFavorita) {
        favoritosService.remove(pelicula.id);
        setEsFavorita(false);
      } else {
        favoritosService.add(pelicula.id);
        setEsFavorita(true);
      }
    }
  };

  return (
    <>
      <div className="h-14"></div>
      <div className="relative w-full min-h-screen bg-black text-white">
        <div
          className="relative w-full h-[60vh] sm:h-[80vh] bg-black overflow-hidden"
          style={{ backgroundImage: `url(${pelicula.imagenPresentacion})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

          <div className="relative z-20 max-w-5xl mx-auto h-full px-4 sm:px-8 py-6 sm:py-10 flex flex-col justify-end gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-white drop-shadow-lg bg-gradient-to-r from-red-600 via-white to-red-500 bg-clip-text text-transparent uppercase tracking-wide leading-tight">
              {pelicula.titulo}
            </h1>

            <div className="w-full h-auto max-h-[500px] rounded-lg shadow-lg overflow-hidden flex justify-center items-center ">
              <img
                src={pelicula.imagenPresentacion}
                alt={`Presentación de ${pelicula.titulo}`}
                className="max-w-full max-h-[500px] object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm flex-wrap text-white animate-fade-down animate-ease-in-out">
              <span className="bg-white text-black px-2 py-0.5 rounded font-semibold">
                HD
              </span>
              <span className="border border-white px-2 py-0.5 rounded">
                {pelicula.duracion ?? "2h 10min"}
              </span>
              <span className="text-white/70">
                {pelicula.generos.join(" · ")}
              </span>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              {pelicula.sinopsis}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <BotonNetflix
                onClick={() => navigate(`/pelicula/${pelicula.id}/play`)}
              >
                🎬 Ver trailer
              </BotonNetflix>

              <BotonNetflix onClick={toggleFavorito}>
                {esFavorita
                  ? "❤️ Quitar de favoritos"
                  : "🤍 Agregar a favoritos"}
              </BotonNetflix>
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-12 text-white space-y-8">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 border-b border-white/20 pb-2">
              Más títulos similares
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {peliculasSimilares.map((p) => (
                <div
                  key={p.id}
                  className="cursor-pointer group"
                  onClick={() => navigate(`/pelicula/${p.id}`)}
                >
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={p.imagen}
                      alt={p.titulo}
                      className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-center text-white opacity-90 group-hover:opacity-100 transition">
                    {p.titulo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

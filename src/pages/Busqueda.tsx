import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieService } from "../recursos/service";
import type { Pelicula } from "../recursos/peliculas";
import CardListado from "../components/CardListado";

export default function Busqueda() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const [resultados, setResultados] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultados = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const todasLasPeliculas = await movieService.getAllMovies();
        const filtradas = todasLasPeliculas.filter((pelicula: Pelicula) =>
          pelicula.titulo.toLowerCase().includes(query)
        );
        setResultados(filtradas);
      } catch (err) {
        setError("Error al cargar los resultados de la búsqueda.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResultados();
  }, [query]);

  return (
    <>
      <div className="h-15"></div>
      <div className="min-h-screen  text-white px-6 py-10 animate-fade-up animate-ease-in-out">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-200  text-white">
            <svg
              className="animate-spin h-12 w-12 text-red-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Loading spinner"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <p className="text-xl font-semibold tracking-wide">
              Cargando<span className="animate-pulse">...</span>
            </p>
          </div>
        )}

        {error && (
          <div className="text-center text-lg text-red-500">{error}</div>
        )}

        {!isLoading && !error && resultados.length === 0 && (
          <div className="text-center text-lg text-gray-400 animate-fade-up animate-ease-in-out">
            No se encontraron películas con ese título.
          </div>
        )}

        {resultados.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-fade-up animate-ease-in-out">
            {resultados.map((pelicula) => (
              <CardListado
                key={pelicula.id}
                pelicula={{
                  id: pelicula.id,
                  titulo: pelicula.titulo,
                  anio: pelicula.anio,
                  cover: pelicula.cover,
                }}
                onClick={() => navigate(`/pelicula/${pelicula.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

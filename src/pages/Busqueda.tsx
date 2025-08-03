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
      <div className="min-h-screen bg-black text-white px-6 py-10 animate-fade-up animate-ease-in-out">
        <h1 className="text-4xl font-extrabold mb-6 tracking-wide">
          Resultados para: "{query}"
        </h1>

        {isLoading && (
          <div className="text-center text-lg text-gray-400">
            Cargando resultados...
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

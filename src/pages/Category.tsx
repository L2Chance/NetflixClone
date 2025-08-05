import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardListado from "../components/CardListado";
import { movieService } from "../recursos/service";
import type { Pelicula } from "../recursos/peliculas";

const generosDestacados = [
  "Todos",
  "Acción",
  "Aventura",
  "Comedia",
  "Drama",
  "Terror",
  "Bélica",
  "Fantasía",
  "Ciencia ficción",
];

export default function Category() {
  const { genre } = useParams<{ genre: string }>();
  const navigate = useNavigate();
  const genreLower = genre?.toLowerCase() ?? "todos";

  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagina, setPagina] = useState(1);
  const porPagina = 16;

  useEffect(() => {
    setPagina(1);
  }, [genre]);

  useEffect(() => {
    const fetchPeliculas = async () => {
      setIsLoading(true);
      try {
        const data = await movieService.getAllMovies();
        setPeliculas(data);
      } catch {
        setError("No se pudieron cargar las películas.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeliculas();
  }, []);

  const peliculasFiltradas =
    genreLower === "todos"
      ? peliculas
      : peliculas.filter((p) =>
          p.generos.some((g) => g.toLowerCase() === genreLower)
        );

  const totalPaginas = Math.ceil(peliculasFiltradas.length / porPagina);
  const paginaActual = peliculasFiltradas.slice(
    (pagina - 1) * porPagina,
    pagina * porPagina
  );

  const Paginador = () =>
    totalPaginas > 1 && (
      <div className="flex items-center justify-center gap-6 my-10">
        <button
          onClick={() => setPagina((prev) => Math.max(1, prev - 1))}
          disabled={pagina === 1}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          ← Anterior
        </button>

        <span className="text-lg font-medium text-white tracking-wide">
          Página <span className="font-bold">{pagina}</span> de{" "}
          <span className="font-bold">{totalPaginas}</span>
        </span>

        <button
          onClick={() => setPagina((prev) => Math.min(totalPaginas, prev + 1))}
          disabled={pagina === totalPaginas}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          Siguiente →
        </button>
      </div>
    );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="animate-spin h-12 w-12 border-4 border-red-600 rounded-full border-t-transparent mb-4" />
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <>
      <div className="h-15"></div>
      <div className="min-h-[800px] px-6 py-10 text-white animate-fade-up animate-ease-in-out">
        <h1 className="text-3xl font-extrabold tracking-wide mb-8 text-white drop-shadow-md">
          <span className="bg-gradient-to-r from-red-600 via-red-400 to-white bg-clip-text text-transparent uppercase">
            {genreLower === "todos"
              ? "Todas las películas"
              : `Categoría: ${genre}`}
          </span>
        </h1>

        <div className="flex gap-6">
          {/* Botones de género */}
          <div className="flex flex-col gap-2 w-44">
            {generosDestacados.map((g) => (
              <button
                key={g}
                onClick={() => navigate(`/category/${g.toLowerCase()}`)}
                className={`py-2 rounded text-sm font-medium transition ${
                  g.toLowerCase() === genreLower
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 hover:bg-red-700"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Listado de películas */}
          <div className="flex-1 animate-fade-up animate-ease-in-out">
            {peliculasFiltradas.length === 0 ? (
              <div className="text-center text-gray-400">
                No se encontraron películas para la categoría "{genre}".
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-3 justify-center">
                  {paginaActual.map((p) => (
                    <CardListado
                      key={p.id}
                      pelicula={{
                        id: p.id,
                        titulo: p.titulo,
                        anio: p.anio,
                        cover: p.cover,
                      }}
                      onClick={() => navigate(`/pelicula/${p.id}`)}
                    />
                  ))}
                </div>
                <Paginador />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

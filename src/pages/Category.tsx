import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import peliculas from "../recursos/peliculas";
import CardListado from "../components/CardListado";

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
  const genreLower = genre?.toLowerCase() ?? "";

  const [paginaActual, setPaginaActual] = useState(1);
  const peliculasPorPagina = 10;

  // Resetear a página 1 al cambiar de género
  useEffect(() => {
    setPaginaActual(1);
  }, [genre]);

  // Filtrar películas
  const peliculasFiltradas =
    genreLower === "todos" || !genreLower
      ? peliculas
      : peliculas.filter((pelicula) =>
          pelicula.generos.some((g) => g.toLowerCase() === genreLower)
        );

  // Calcular paginación
  const totalPaginas = Math.ceil(
    peliculasFiltradas.length / peliculasPorPagina
  );
  const indiceInicial = (paginaActual - 1) * peliculasPorPagina;
  const indiceFinal = indiceInicial + peliculasPorPagina;
  const peliculasPaginadas = peliculasFiltradas.slice(
    indiceInicial,
    indiceFinal
  );

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  const Paginador = () => (
    <div className="flex justify-center items-center gap-4 my-6">
      <button
        onClick={() => cambiarPagina(paginaActual - 1)}
        disabled={paginaActual === 1}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
      >
        ← Anterior
      </button>
      <span className="text-sm text-gray-300">
        Página {paginaActual} de {totalPaginas}
      </span>
      <button
        onClick={() => cambiarPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
      >
        Siguiente →
      </button>
    </div>
  );

  return (
    <>
      <div className="h-15"></div>
      <div className="min-h-screen text-white px-6 py-10 animate-fade-up animate-ease-in-out">
        <h1 className="text-4xl font-extrabold mb-6 tracking-wide">
          {genreLower === "todos" || !genre
            ? "Todas las películas"
            : `Categoría: ${genre}`}
        </h1>

        <div className="flex w-full">
          {/* Botones de géneros */}
          <div className="flex flex-col w-[15%] gap-2 p-4 mb-10 animate-fade-up animate-ease-in-out">
            {generosDestacados.map((g) => (
              <button
                key={g}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  g.toLowerCase() === genreLower
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-800 hover:bg-red-700 hover:text-white"
                }`}
                onClick={() => navigate(`/category/${g.toLowerCase()}`)}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="w-[85%]">
            {/* Mensaje si no hay películas */}
            {genre && peliculasFiltradas.length === 0 && (
              <div className="text-center text-lg text-gray-400 animate-fade-up animate-ease-in-out">
                No se encontraron películas para la categoría "{genre}".
              </div>
            )}

            {/* Listado de películas */}
            {peliculasPaginadas.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-center">
                {peliculasPaginadas.map((pelicula) => (
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

            {/* Paginador inferior */}
            {peliculasFiltradas.length > 0 && <Paginador />}
          </div>
        </div>
      </div>
    </>
  );
}

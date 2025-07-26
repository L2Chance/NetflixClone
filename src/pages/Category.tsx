import { useParams, useNavigate } from "react-router-dom";
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

  const peliculasFiltradas =
    genreLower === "todos" || !genreLower
      ? peliculas
      : peliculas.filter((pelicula) =>
          pelicula.generos.some((g) => g.toLowerCase() === genreLower)
        );

  return (
    <>
      <div className="h-15"></div>
      <div className="min-h-screen bg-black text-white px-6 py-10 animate-fade-up animate-ease-in-out">
        <h1 className="text-4xl font-extrabold mb-6 tracking-wide">
          {genreLower === "todos" || !genre
            ? "Todas las películas"
            : `Categoría: ${genre}`}
        </h1>

        {/* Botones de géneros */}
        <div className="flex flex-wrap gap-3 mb-10 animate-fade-up animate-ease-in-out">
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

        {/* Mensaje si no hay películas */}
        {genre && peliculasFiltradas.length === 0 && (
          <div className="text-center text-lg text-gray-400 animate-fade-up animate-ease-in-out">
            No se encontraron películas para la categoría "{genre}".
          </div>
        )}

        {/* Listado de películas */}
        {peliculasFiltradas.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-fade-up animate-ease-in-out">
            {peliculasFiltradas.map((pelicula) => (
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

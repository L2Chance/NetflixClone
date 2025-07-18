import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import peliculas from "../recursos/peliculas";
import CardListado from "../components/CardListado";

// Definición del tipo Pelicula
type Pelicula = {
  id: number;
  titulo: string;
  anio: string;
  director: string;
  duracion: string;
  sinopsis: string;
  generos: string[];
  cover: string;
  imagen: string;
  destacada?: boolean;
  popular: boolean;
  puntuacion: number;
  imagenPresentacion: string;
  trailer: string;
};

export default function Busqueda() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const [resultados, setResultados] = useState<Pelicula[]>([]);

  useEffect(() => {
    const filtradas = peliculas.filter((pelicula: Pelicula) =>
      pelicula.titulo.toLowerCase().includes(query)
    );
    setResultados(filtradas);
  }, [query]);

  return (
    <>
      <div className="h-15"></div>
      <div className="min-h-screen bg-black text-white px-6 py-10 animate-fade-up animate-ease-in-out">
        <h1 className="text-4xl font-extrabold mb-6 tracking-wide">
          Resultados para: "{query}"
        </h1>

        {/* Si no hay resultados */}
        {resultados.length === 0 && (
          <div className="text-center text-lg text-gray-400 animate-fade-up animate-ease-in-out">
            No se encontraron películas con ese título.
          </div>
        )}

        {/* Listado de resultados */}
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

import { useEffect, useState } from "react";
import { movieService } from "../recursos/service";
import { favoritosService } from "../recursos/favoritosService";
import type { Pelicula } from "../recursos/peliculas";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
  const [favoritas, setFavoritas] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavoritos = async () => {
      setIsLoading(true);
      const idsFavoritas = favoritosService.get();
      const todas = await movieService.getAllMovies();
      const seleccionadas = todas.filter((p) => idsFavoritas.includes(p.id));
      setFavoritas(seleccionadas);
      setIsLoading(false);
    };

    fetchFavoritos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="animate-spin h-12 w-12 border-4 border-red-600 rounded-full border-t-transparent mb-4" />
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  if (favoritas.length === 0) {
    return (
      <>
        <div className="text-white min-h-screen flex flex-col items-center justify-center p-6 text-2xl animate-fade-up animate-ease-in-out">
          <p className="text-8xl mb-4">🙁</p>
          <p className="texto-semibold">No hay películas favoritas aún</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-15" />
      <div className="min-h-screen text-white p-6 animate-fade-up animate-ease-in-out">
        <div className="flex flex-wrap gap-4 justify-center">
          {favoritas.map((p) => (
            <div
              key={p.id}
              className="w-100 sm:w-100 cursor-pointer group flex flex-col items-center"
              onClick={() => navigate(`/pelicula/${p.id}`)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg w-full">
                <img
                  src={p.imagenPresentacion}
                  alt={p.titulo}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 text-sm text-center text-white opacity-90 group-hover:opacity-100 transition">
                {p.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

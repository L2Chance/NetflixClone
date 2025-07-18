import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import peliculas from "../recursos/peliculas";
import BotonNetflix from "../components/BotonNetflix";

export default function PeliculaDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Al cambiar de película, volver al tope
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const pelicula = peliculas.find((p) => p.id === Number(id));

  if (!pelicula) {
    return (
      <div className="p-4 text-center text-white">Película no encontrada</div>
    );
  }

  const peliculasSimilares = peliculas
    .filter((p) => p.id !== pelicula.id)
    .slice(0, 6);

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Fondo con imagen de portada */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${pelicula.imagen})` }}
      ></div>

      {/* Capa de fondo degradada */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/60 to-black"></div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 py-20 flex flex-col gap-10 items-center sm:items-start animate-fade-up animate-ease-in-out">
        {/* Imagen o póster */}
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          className="w-full sm:w-[1000px] rounded shadow-lg object-cover"
        />

        <BotonNetflix onClick={() => navigate(`/pelicula/${pelicula.id}/play`)}>
          Ver trailer
        </BotonNetflix>

        {/* Detalles de texto */}
        <div className="flex-1 w-full animate-fade-up animate-ease-in-out">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {pelicula.titulo}
          </h1>

          <div className="flex items-center gap-2 text-sm mb-4 flex-wrap">
            <span className="border border-white rounded px-2 py-0.5">16+</span>
            <span className="bg-white text-black font-semibold px-2 py-0.5 rounded">
              HD
            </span>
            <span className="text-white/70 animate-fade-up animate-ease-in-out">
              2h 10min
            </span>
          </div>

          <p className="text-sm sm:text-base mb-4 leading-relaxed animate-fade-up animate-ease-in-out">
            {pelicula.sinopsis}
          </p>

          <p className="text-sm sm:text-base mb-6 animate-fade-up animate-ease-in-out">
            <span className="font-semibold">Géneros:</span>{" "}
            {pelicula.generos.join(" · ")}
          </p>

          {/* Capturas de pantalla (placeholders) */}
          <div className="mb-10 animate-fade-up animate-ease-in-out">
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

          {/* Más títulos similares */}
          <div className="w-full animate-fade-up animate-ease-in-out">
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
      </div>
    </div>
  );
}

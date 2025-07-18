import { useParams, useNavigate } from "react-router-dom";
import peliculas from "../recursos/peliculas";

export default function Reproductor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const pelicula = peliculas.find((p) => p.id === Number(id));

  if (!pelicula) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-3xl font-bold">
        ❌ Película no encontrada
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-6xl text-center animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          {pelicula.titulo}
        </h1>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-700 mb-8 animate-fade-up animate-delay-100">
          <iframe
            src={pelicula.trailer}
            title={`Trailer de ${pelicula.titulo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 transition-all duration-200 text-white text-lg font-semibold rounded-md shadow-md animate-fade-up animate-delay-200"
        >
          ⬅ Volver
        </button>
      </div>
    </div>
  );
}

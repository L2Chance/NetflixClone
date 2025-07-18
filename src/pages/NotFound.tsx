import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center animate-fade-up animate-ease-in-out">
      <div className="text-8xl mb-4">🚫</div>
      <h1 className="text-4xl font-bold mb-2">404 - Página no encontrada</h1>
      <p className="text-lg text-gray-400 mb-6">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 animate-fade-up animate-ease-in-out"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

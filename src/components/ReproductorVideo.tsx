import { useState, useRef, useEffect } from "react";

type ReproductorVideoProps = {
  onCerrar: () => void;
};

export default function ReproductorVideo({ onCerrar }: ReproductorVideoProps) {
  const duracionTotal = 240;
  const [segundosActuales, setSegundosActuales] = useState(0);
  const [estaPausado, setEstaPausado] = useState(false);
  const barraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (estaPausado) return;

    const intervalo = setInterval(() => {
      setSegundosActuales((prev) =>
        prev < duracionTotal ? prev + 1 : duracionTotal
      );
    }, 1000);

    return () => clearInterval(intervalo);
  }, [estaPausado]);

  const togglePlayPause = () => setEstaPausado((prev) => !prev);

  const progreso = (segundosActuales / duracionTotal) * 100;

  const formatearTiempo = (segundos: number) => {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleClickBarra = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!barraRef.current) return;
    const rect = barraRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const nuevoProgreso = clickX / rect.width;
    const nuevoTiempo = Math.floor(nuevoProgreso * duracionTotal);
    setSegundosActuales(nuevoTiempo);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 p-4 animate-jump-in animate-ease-linear">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl aspect-video relative flex flex-col justify-between shadow-lg p-6">
        {/* Botón cerrar */}
        <button
          onClick={onCerrar}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-600 z-10"
          aria-label="Cerrar reproductor"
          type="button"
        >
          &times;
        </button>

        {/* Spinner al centro */}
        <div className="flex-grow flex justify-center items-center">
          <div className="border-8 border-t-white border-gray-300 rounded-full w-20 h-20 animate-spin"></div>
        </div>

        {/* Controles de reproducción abajo */}
        <div className="w-full mt-4 flex items-center gap-4">
          {/* Botón de play/pausa al costado */}
          <button
            onClick={togglePlayPause}
            aria-label={estaPausado ? "Reproducir" : "Pausar"}
            className="text-white text-2xl hover:scale-110 transition"
          >
            {estaPausado ? "►" : "❚❚"}
          </button>

          {/* Barra de progreso */}
          <div className="flex-1">
            <div
              ref={barraRef}
              onClick={handleClickBarra}
              className="relative h-3 bg-gray-700 rounded cursor-pointer"
              aria-label="Barra de progreso"
            >
              <div
                className="bg-red-600 h-3 rounded"
                style={{ width: `${progreso}%` }}
              ></div>
            </div>

            {/* Tiempos */}
            <div className="flex justify-between text-white mt-1 font-mono text-xs select-none">
              <span>{formatearTiempo(segundosActuales)}</span>
              <span>{formatearTiempo(duracionTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

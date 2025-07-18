import React from "react";

interface Pelicula {
  id: number;
  titulo: string;
  anio: string;
  cover: string;
}

interface CardListadoProps {
  pelicula: Pelicula;
  onClick?: () => void;
}

export default function CardListado({ pelicula, onClick }: CardListadoProps) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rounded-md overflow-hidden shadow-md bg-black transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      style={{ width: 180 }}
    >
      <img
        src={pelicula.cover}
        alt={pelicula.titulo}
        className="w-full h-[270px] object-cover transition-transform duration-500 ease-in-out hover:brightness-75 hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-2">
        <h3 className="text-white text-sm font-semibold truncate">
          {pelicula.titulo}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{pelicula.anio}</p>
      </div>
    </div>
  );
}

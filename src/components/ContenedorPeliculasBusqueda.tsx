import React from "react";

interface ContenedorPeliculasBusquedaProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContenedorPeliculasBusqueda({
  children,
  className = "",
}: ContenedorPeliculasBusquedaProps) {
  return (
    <div className={`flex flex-wrap gap-15 p-2 justify-center ${className}`}>
      {React.Children.map(children, (child) => (
        <div className="min-w-[200px] max-w-[240px] flex-grow">{child}</div>
      ))}
    </div>
  );
}

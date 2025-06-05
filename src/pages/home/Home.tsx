import { useState, useRef } from "react";
import Fondo from "../../components/Fondo";
import PrincipalPeliculaCard from "../../components/PrincipalPeliculaCard";
import peliculas from "../../recursos/peliculas";
import DescripcionPelicula from "./DescripcionPelicula";
import ContenedorPeliculas from "../../components/ContenedorPeliculas";

export default function Home() {
  const [peliculaActual, setPeliculaActual] = useState(0);
  const descripcionRef = useRef<HTMLDivElement>(null);

  const handleSelectPelicula = (id: number) => {
    setPeliculaActual(id);

    descripcionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fondo imagen={peliculas[peliculaActual].imagen}>
      <div ref={descripcionRef}>
        <div className="h-20"></div>
      </div>

      <DescripcionPelicula
        titulo={peliculas[peliculaActual].titulo}
        generos={peliculas[peliculaActual].generos}
        anio={peliculas[peliculaActual].anio}
        director={peliculas[peliculaActual].director}
        duracion={peliculas[peliculaActual].duracion}
        sinopsis={peliculas[peliculaActual].sinopsis}
        puntuacion={peliculas[peliculaActual].puntuacion}
      ></DescripcionPelicula>

      <div className="flex flex-col justify-center gap-5">
        <h1 className="texto-bold ml-3">POPULAR ESTA SEMANA</h1>

        <ContenedorPeliculas>
          {peliculas.slice(0, 6).map((pelicula) => (
            <PrincipalPeliculaCard
              key={pelicula.id}
              url={pelicula.imagen}
              titulo={pelicula.titulo}
              isSelected={pelicula.id === peliculaActual}
              onClick={() => handleSelectPelicula(pelicula.id)}
            />
          ))}
        </ContenedorPeliculas>

        <h1 className="texto-bold ml-3">BÉLICO</h1>
        <ContenedorPeliculas className="w-max">
          {peliculas
            .filter((pelicula) => pelicula.generos.includes("Bélica"))
            .map((pelicula) => (
              <PrincipalPeliculaCard
                key={pelicula.id}
                url={pelicula.imagen}
                titulo={pelicula.titulo}
                isSelected={pelicula.id === peliculaActual}
                onClick={() => handleSelectPelicula(pelicula.id)}
              />
            ))}
        </ContenedorPeliculas>

        <h1 className="texto-bold ml-3">ROMANCE</h1>
        <ContenedorPeliculas className="w-max">
          {peliculas
            .filter((pelicula) => pelicula.generos.includes("Romance"))
            .map((pelicula) => (
              <PrincipalPeliculaCard
                key={pelicula.id}
                url={pelicula.imagen}
                titulo={pelicula.titulo}
                isSelected={pelicula.id === peliculaActual}
                onClick={() => handleSelectPelicula(pelicula.id)}
              />
            ))}
        </ContenedorPeliculas>

        <h1 className="texto-bold ml-3">ANIMACIÓN</h1>
        <ContenedorPeliculas className="w-max">
          {peliculas
            .filter((pelicula) => pelicula.generos.includes("Animación"))
            .map((pelicula) => (
              <PrincipalPeliculaCard
                key={pelicula.id}
                url={pelicula.imagen}
                titulo={pelicula.titulo}
                isSelected={pelicula.id === peliculaActual}
                onClick={() => handleSelectPelicula(pelicula.id)}
              />
            ))}
        </ContenedorPeliculas>
      </div>
    </Fondo>
  );
}

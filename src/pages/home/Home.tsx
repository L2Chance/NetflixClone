import { useState, useRef, useEffect } from "react";
import Fondo from "../../components/Fondo";
import PrincipalPeliculaCard from "../../components/PrincipalPeliculaCard";
import BusquedaPeliculaCard from "../../components/BusquedaPeliculaCard";
import peliculas from "../../recursos/peliculas";
import DescripcionPelicula from "./DescripcionPelicula";
import ContenedorPeliculas from "../../components/ContenedorPeliculas";
import ContenedorPeliculasBusqueda from "../../components/ContenedorPeliculasBusqueda";

type HomeProps = {
  terminoBusqueda: string;
  abrirReproductor: () => void;
};

export default function Home({ terminoBusqueda, abrirReproductor }: HomeProps) {
  const [peliculaActual, setPeliculaActual] = useState(0);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
  const descripcionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminoBusqueda.trim() !== "") {
      setMostrarDescripcion(false);
    } else {
      setMostrarDescripcion(true);
    }
  }, [terminoBusqueda]);

  const handleSelectPelicula = (id: number) => {
    setPeliculaActual(id);
    setMostrarDescripcion(true);
    descripcionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const termino = terminoBusqueda.toLowerCase();
    const tituloIncluye = pelicula.titulo.toLowerCase().includes(termino);
    const generoIncluye = pelicula.generos.some((genero) =>
      genero.toLowerCase().includes(termino)
    );
    return tituloIncluye || generoIncluye;
  });

  return (
    <Fondo imagen={peliculas[peliculaActual].imagen}>
      <div ref={descripcionRef}>
        <div className="h-20"></div>
      </div>

      {mostrarDescripcion && (
        <DescripcionPelicula
          titulo={peliculas[peliculaActual].titulo}
          generos={peliculas[peliculaActual].generos}
          anio={peliculas[peliculaActual].anio}
          director={peliculas[peliculaActual].director}
          duracion={peliculas[peliculaActual].duracion}
          sinopsis={peliculas[peliculaActual].sinopsis}
          puntuacion={peliculas[peliculaActual].puntuacion}
          abrirReproductor={abrirReproductor}
        />
      )}

      <div className="flex flex-col justify-center gap-5">
        {terminoBusqueda ? (
          <>
            <h1 className="texto-bold ml-3">RESULTADOS DE BÚSQUEDA</h1>
            <ContenedorPeliculasBusqueda>
              {peliculasFiltradas.map((pelicula) => (
                <BusquedaPeliculaCard
                  key={pelicula.id}
                  url={pelicula.imagen}
                  titulo={pelicula.titulo}
                  onClick={() => handleSelectPelicula(pelicula.id)}
                />
              ))}
            </ContenedorPeliculasBusqueda>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </Fondo>
  );
}

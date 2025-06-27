import BotonNetflix from "../../components/BotonNetflix";
import Puntuacion from "../../components/Puntuacion";

interface DescripcionPeliculaProps {
  generos: string[];
  titulo: string;
  anio: string;
  director: string;
  duracion: string;
  sinopsis: string;
  puntuacion: number;
  abrirReproductor: () => void;
}

export default function DescripcionPelicula(props: DescripcionPeliculaProps) {
  return (
    <section className="flex justify-center items-center w-full py-10">
      <article className="w-[90%] min-h-full flex flex-col justify-center gap-5 mt-10 2xl:mt-20">
        {/* Géneros */}
        <span className="flex gap-2">
          <h2 className="texto-semibold">{props.generos[0]}</h2>
          <h2 className="texto-semibold">|</h2>
          <h2 className="texto-semibold">{props.generos[1]}</h2>
          <h2 className="texto-semibold">|</h2>
          <h2 className="texto-semibold">{props.generos[2]}</h2>
        </span>

        {/* Título */}
        <h1 className="text-5xl texto-bold">{props.titulo}</h1>

        {/* Detalles */}
        <span className="flex gap-2">
          <h2 className="texto-bold">{props.anio}</h2>
          <h2 className="texto-bold">|</h2>
          <h2 className="texto-bold">DIRECTOR:</h2>
          <h2 className="texto-light">{props.director}</h2>
          <h2 className="texto-semibold">|</h2>
          <h2 className="texto-semibold">Duración:</h2>
          <h2 className="texto-light">{props.duracion}</h2>
        </span>

        {/* Sinopsis */}
        <p className="w-[80%] text-white font-family-inter">{props.sinopsis}</p>

        <Puntuacion rating={props.puntuacion} />

        {/* Botones */}
        <span className="flex gap-4">
          <BotonNetflix onClick={props.abrirReproductor}>
            Ver ahora ►
          </BotonNetflix>
          <BotonNetflix variant="transparent">Todos los episodios</BotonNetflix>
        </span>
      </article>
    </section>
  );
}

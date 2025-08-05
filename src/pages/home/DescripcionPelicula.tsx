import BotonNetflix from "../../components/BotonNetflix";
import Puntuacion from "../../components/Puntuacion";
import Pelicula from "../../assets/PeliculaPrincipal.jpg"; // Asumo que querés mantener esta imagen, si tenés otra para La La Land, cambiá la importación

export default function DescripcionPelicula() {
  const generos = ["Comedia dramática", "Música", "Romance"];
  const titulo = "La La Land";
  const anio = "2016";
  const director = "Damien Chazelle";
  const duracion = "2h 8min";
  const sinopsis =
    "Una aspirante a actriz y un pianista de jazz luchan por mantener vivo su amor mientras persiguen sus sueños en Los Ángeles. Una celebración colorida y emotiva de la pasión, el arte y el sacrificio.";
  const puntuacion = 8.0;

  const abrirReproductor = () => {
    window.location.href = "/pelicula/1";
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center lg:justify-start overflow-hidden animate-fade">
      <img
        src={Pelicula}
        alt="Fondo de película"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <article className="relative z-10 w-full max-w-6xl px-4 lg:pl-20 flex flex-col gap-5">
        {/* Géneros */}
        <div className="flex flex-wrap gap-2 text-sm sm:text-base text-white">
          {generos.map((genero, index) => (
            <h2 key={index} className="texto-semibold">
              {index > 0 && "|"} {genero}
            </h2>
          ))}
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-5xl texto-bold text-white">{titulo}</h1>

        {/* Detalles */}
        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-white">
          <h2 className="texto-bold">{anio}</h2>
          <span className="texto-bold">|</span>
          <h2 className="texto-bold">DIRECTOR:</h2>
          <h2 className="texto-light">{director}</h2>
          <span className="texto-semibold">|</span>
          <h2 className="texto-semibold">Duración:</h2>
          <h2 className="texto-light">{duracion}</h2>
        </div>

        {/* Sinopsis */}
        <p className="w-full sm:w-[80%] text-white font-family-inter text-sm sm:text-base leading-relaxed">
          {sinopsis}
        </p>

        {/* Puntuación */}
        <Puntuacion rating={puntuacion} />

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-2">
          <BotonNetflix onClick={abrirReproductor}>Ver ahora ►</BotonNetflix>
        </div>
      </article>
    </section>
  );
}

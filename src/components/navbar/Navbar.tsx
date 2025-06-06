import netflixLogo from "../../assets/netflix-logo.svg";
import fotoPerfil from "../../assets/messi-perfil.jpg";
import lupaBuscador from "../../assets/lupa.svg";

export default function Navbar() {
  return (
    <>
      <div className=" flex justify-between w-full h-20 bg-black/20 absolute z-20 p-10">
        {/*Sección izquierda del Navbar*/}
        <section className="flex justify-center items-center gap-3">
          <img src={netflixLogo} alt="Logo-Netflix" className="w-20 h-20" />

          <p className="text-xl font-family-roboto text-white">|</p>
          <p className="text-2xl texto-light">Perez Lautaro Ivan</p>
        </section>
        {/*Sección derecha del Navbar*/}
        <section className="flex justify-center items-center gap-10">
          <img src={lupaBuscador} alt="Logo-Netflix" className="w-8 h-8" />
          <img
            src={fotoPerfil}
            alt="Logo-Netflix"
            className="w-12 h-12 object-cover rounded-full"
          />
        </section>
      </div>

      {/*Sección derecha del Navbar*/}
    </>
  );
}

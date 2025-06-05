interface PeliculaPrincipalCardProps {
  onClick?: () => void;
  url: string;
  titulo: string;
  isSelected?: boolean;
}

function peliculaSeleccionada(isSelected: boolean) {
  if (isSelected) {
    return "border-3 border-white scale-97";
  } else {
    return "";
  }
}

export default function PrincipalPeliculaCard({
  url,
  titulo,
  onClick,
  isSelected = false,
}: PeliculaPrincipalCardProps) {
  return (
    <article
      className={`min-w-[400px] cursor-pointer transition-transform duration-300 ${peliculaSeleccionada(
        isSelected
      )}`}
      onClick={onClick}
    >
      <img className="w-full h-60 object-cover" src={url} alt={titulo} />
    </article>
  );
}

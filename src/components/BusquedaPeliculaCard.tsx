interface BusquedaPeliculaCardProps {
  onClick?: () => void;
  url: string;
  titulo: string;
  isSelected?: boolean;
}

export default function BusquedaPeliculaCard({
  url,
  titulo,
  onClick,
  isSelected = false,
}: BusquedaPeliculaCardProps) {
  return (
    <article
      onClick={onClick}
      className={`
        cursor-pointer transition-transform duration-300 min-w-[260px] max-w-[320px] hover:scale-105
        rounded-md shadow-md
        ${isSelected ? "border-4 border-white" : "border border-transparent"}
      `}
    >
      <img
        className="w-full h-36 object-cover rounded-t-md"
        src={url}
        alt={titulo}
      />
      <h3 className="mt-3 text-white text-center text-base font-semibold truncate">
        {titulo}
      </h3>
    </article>
  );
}


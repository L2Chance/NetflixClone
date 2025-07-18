interface PeliculaPrincipalCardProps {
  idPelicula: number;
  onClick?: () => void;
  url: string;
  titulo: string;
  onHover?: (coords: { id: number; x: number; y: number }) => void;
  onLeave?: () => void;
}

export default function PrincipalPeliculaCard({
  idPelicula,
  url,
  titulo,
  onClick,
  onHover,
  onLeave,
}: PeliculaPrincipalCardProps) {
  return (
    <article
      className="w-[260px] cursor-pointer transition-transform duration-300"
      onClick={onClick}
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onHover?.({ id: idPelicula, x: rect.left, y: rect.top });
      }}
      onMouseLeave={onLeave}
    >
      <img className="w-full h-40 object-cover" src={url} alt={titulo} />
    </article>
  );
}

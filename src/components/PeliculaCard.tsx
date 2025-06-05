interface PeliculaCardProps {
  titulo: string;
  url: string;
}

export default function PeliculaCard({ url, titulo }: PeliculaCardProps) {
  return (
    <>
      <div className="w-40 border border-amber-50">
        <img src={url} alt={titulo} />
      </div>
    </>
  );
}

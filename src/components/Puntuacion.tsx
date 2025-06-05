import Rate from "rc-rate";
import "rc-rate/assets/index.css";

interface PuntuacionProps {
  rating?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export default function Puntuacion({
  rating = 0,
  onChange,
  className,
}: PuntuacionProps) {
  return (
    <div className={className}>
      <Rate
        style={{ fontSize: 30 }}
        allowHalf
        defaultValue={rating}
        onChange={onChange}
      />
    </div>
  );
}

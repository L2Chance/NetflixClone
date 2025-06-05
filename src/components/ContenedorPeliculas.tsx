import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React from "react";

interface ContenedorPeliculasProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContenedorPeliculas({
  children,
  className = "",
}: ContenedorPeliculasProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    dragSpeed: 0.3,
    slides: {
      perView: "auto",
      spacing: 5,
    },
  });

  return (
    <div
      ref={sliderRef}
      className={`keen-slider overflow-visible ${className}`}
    >
      {React.Children.map(children, (child) => (
        <div className="keen-slider__slide !min-w-[400px]">{child}</div>
      ))}
    </div>
  );
}

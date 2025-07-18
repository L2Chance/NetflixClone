import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface ContenedorPeliculasProps {
  children: React.ReactNode;
  className?: string;
}

const ContenedorPeliculas = forwardRef<
  {
    next: () => void;
    prev: () => void;
    moveBy: (slides: number) => void;
  } | null,
  ContenedorPeliculasProps
>(({ children, className = "" }, ref) => {
  const [perView, setPerView] = useState(3);

  // Actualiza el valor de perView según el ancho de pantalla
  useEffect(() => {
    const actualizarPerView = () => {
      const width = window.innerWidth;
      if (width >= 1600) setPerView(7);
      else if (width >= 1400) setPerView(6);
      else if (width >= 1200) setPerView(5);
      else if (width >= 992) setPerView(4);
      else if (width >= 768) setPerView(3);
      else setPerView(2);
    };

    actualizarPerView();
    window.addEventListener("resize", actualizarPerView);
    return () => window.removeEventListener("resize", actualizarPerView);
  }, []);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    drag: true,
    slides: {
      perView,
      spacing: 7,
    },
  });

  useImperativeHandle(ref, () => ({
    next: () => slider.current?.next(),
    prev: () => slider.current?.prev(),
    moveBy: (slides: number) => {
      const currentIndex = slider.current?.track.details.rel ?? 0;
      slider.current?.moveToIdx(currentIndex + slides);
    },
  }));

  return (
    <div
      ref={sliderRef}
      className={`keen-slider overflow-visible ${className}`}
      style={{ position: "relative" }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="keen-slider__slide px-1"
          style={{ width: "100%" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
});

export default ContenedorPeliculas;

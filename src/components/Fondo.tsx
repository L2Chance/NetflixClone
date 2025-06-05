import React from "react";

interface FondoProps {
  children: React.ReactNode;
  imagen: string;
}

export default function Fondo(props: FondoProps) {
  return (
    <div className="min-h-screen bg-black relative">
      <div
        className="relative h-[700px] bg-cover bg-center bg-no-repeat transition-all 2s"
        style={{ backgroundImage: `url(${props.imagen})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-black z-20"></div>
      </div>

      <div className="absolute top-0 left-0 w-full z-30">{props.children}</div>
    </div>
  );
}

import React from "react";

interface BotonNetflixProps {
  variant?: "red" | "transparent";
  children: React.ReactNode;
  onClick?: () => void; // <-- Agregado onClick aquí
}

export default function BotonNetflix({
  variant = "red",
  children,
  onClick,  // <-- desestructurado onClick
}: BotonNetflixProps) {
  const baseClasses = "h-10 w-50 rounded-[10px] font-semibold cursor-pointer";
  const redClasses =
    "bg-[#D40D1F] text-white border-none hover:bg-red-700 hover:scale-105 transition-all";
  const transparentClasses =
    "bg-transparent border border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all";

  const classes =
    variant === "transparent"
      ? `${baseClasses} ${transparentClasses}`
      : `${baseClasses} ${redClasses}`;

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

// Pages
import Home from "./pages/home/Home";
import Category from "./pages/Category";
import Reproductor from "./pages/Reproductor";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";
import PeliculaDetalle from "./pages/PeliculaDetalle";
import Busqueda from "./pages/Busqueda";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const location = useLocation();

  // Ocultar Navbar si estamos en la ruta del reproductor
  const ocultarNavbar = location.pathname.includes("/play");

  return (
    <>
      {!ocultarNavbar && (
        <Navbar ocultar={ocultarNavbar} onBuscar={setTerminoBusqueda} />
      )}

      <Routes>
        <Route path="/" element={<Home terminoBusqueda={terminoBusqueda} />} />
        <Route path="/category/:genre" element={<Category />} />
        <Route path="/pelicula/:id" element={<PeliculaDetalle />} />
        <Route path="/pelicula/:id/play" element={<Reproductor />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/buscar" element={<Busqueda />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

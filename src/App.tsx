import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ReproductorVideo from "./components/ReproductorVideo";
import { useState } from "react";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [reproductorAbierto, setReproductorAbierto] = useState(false);

  return (
    <>
      <Navbar ocultar={reproductorAbierto} onBuscar={setTerminoBusqueda} />

      <Home 
        terminoBusqueda={terminoBusqueda} 
        abrirReproductor={() => setReproductorAbierto(true)} 
      />

      {reproductorAbierto && (
        <ReproductorVideo onCerrar={() => setReproductorAbierto(false)} />
      )}
    </>
  );
}

export default App;

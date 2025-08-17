

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 px-6 sm:px-10 py-10 text-sm mt-10">
      <div className="max-w-7xl mx-auto">
        <p className="mb-6">
          ¿Preguntas? Llama al{" "}
          <a href="tel:0800800123" className="hover:underline text-white">
            0800-800-123
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {[
            ["Preguntas frecuentes", "Centro de ayuda", "Cuenta", "Prensa"],
            [
              "Relaciones con inversores",
              "Empleos",
              "Formas de ver",
              "Términos de uso",
            ],
            [
              "Contáctanos",
              "Privacidad",
              "Prueba de velocidad",
              "Avisos legales",
            ],
            [
              "Solo en Netflix",
              "Información corporativa",
              "Inversores",
              "Preferencias de cookies",
            ],
          ].map((column, index) => (
            <div key={index}>
              <ul className="space-y-2">
                {column.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:underline hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <select
            className="bg-transparent border border-gray-500 px-3 py-1 rounded text-gray-400 hover:border-white focus:outline-none focus:border-white transition-all duration-200"
            defaultValue="es"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

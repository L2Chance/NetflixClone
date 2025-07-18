import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-3 px-8 py-10 text-sm">
      <div className="max-w-7xl mx-auto">
        <p className="mb-6">
          ¿Preguntas? Llama al{" "}
          <a href="tel:0800800123" className="hover:underline">
            0800-800-123
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cuenta
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Relaciones con inversores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Empleos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Formas de ver
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Términos de uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prueba de velocidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Avisos legales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Solo en Netflix
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Información corporativa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inversores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { movieService } from "../recursos/service";
import type { Pelicula } from "../recursos/peliculas";

export default function CrearPelicula() {
  const [form, setForm] = useState<Omit<Pelicula, "id" | "popular">>({
    titulo: "",
    anio: "",
    director: "",
    duracion: "",
    sinopsis: "",
    generos: [],
    cover: "",
    imagen: "",
    puntuacion: 0,
    imagenPresentacion: "",
    trailer: "",
  });

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: movieService.createMovie,
    onSuccess: () => {
      alert("Movie created successfully!");
      setForm({
        titulo: "",
        anio: "",
        director: "",
        duracion: "",
        sinopsis: "",
        generos: [],
        cover: "",
        imagen: "",
        puntuacion: 0,
        imagenPresentacion: "",
        trailer: "",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // removed checkbox logic for popular because it's gone

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const generos = value.split(",").map((g) => g.trim());
    setForm((prev) => ({ ...prev, generos }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  mutate({ ...form, popular: false }); 
  };

  return (
    <>
      <div className="h-14"></div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl p-10 space-y-10 text-white ring-1 ring-red-700"
        >
          <h1 className="text-4xl font-extrabold tracking-wide text-red-600 text-center mb-8">
            Crear Nueva Película
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <section className="space-y-7">
              {[
                { id: "titulo", label: "Título", type: "text", required: true },
                { id: "anio", label: "Año", type: "text", required: true },
                {
                  id: "director",
                  label: "Director",
                  type: "text",
                  required: true,
                },
                {
                  id: "duracion",
                  label: "Duración",
                  type: "text",
                  required: true,
                },
              ].map(({ id, label, type, required }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block font-semibold text-gray-300 mb-2 text-lg"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={form[id as keyof typeof form] as string}
                    placeholder={label}
                    onChange={handleChange}
                    required={required}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="sinopsis"
                  className="block font-semibold text-gray-300 mb-2 text-lg"
                >
                  Sinopsis
                </label>
                <textarea
                  id="sinopsis"
                  name="sinopsis"
                  value={form.sinopsis}
                  placeholder="Sinopsis"
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 resize-y text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="generos"
                  className="block font-semibold text-gray-300 mb-2 text-lg"
                >
                  Géneros (separados por coma)
                </label>
                <input
                  type="text"
                  id="generos"
                  name="generos"
                  placeholder="Acción, Comedia, Drama"
                  value={form.generos.join(", ")}
                  onChange={handleGenerosChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
              </div>
            </section>

            {/* Right Column */}
            <section className="space-y-7">
              {[
                { id: "cover", label: "URL del Cover" },
                { id: "imagen", label: "URL de la Imagen" },
                {
                  id: "imagenPresentacion",
                  label: "URL Imagen de Presentación",
                },
                { id: "trailer", label: "URL del Trailer" },
              ].map(({ id, label }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block font-semibold text-gray-300 mb-2 text-lg"
                  >
                    {label}
                  </label>
                  <input
                    type="url"
                    id={id}
                    name={id}
                    value={form[id as keyof typeof form] as string}
                    placeholder={label}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="puntuacion"
                  className="block font-semibold text-gray-300 mb-2 text-lg"
                >
                  Puntuación
                </label>
                <input
                  type="number"
                  id="puntuacion"
                  name="puntuacion"
                  min={0}
                  max={5}
                  step={0.1}
                  value={form.puntuacion}
                  onChange={handleChange}
                  placeholder="Puntuación"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
              </div>
            </section>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isPending ? "Creando..." : "Crear Película"}
            </button>
            {isError && (
              <p className="mt-5 text-red-400 font-semibold text-center text-lg">
                {(error as Error).message}
              </p>
            )}
            {isSuccess && (
              <p className="mt-5 text-green-400 font-semibold text-center text-lg">
                ¡Película creada con éxito!
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

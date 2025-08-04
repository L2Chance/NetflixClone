import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { movieService } from "../recursos/service";
import type { Pelicula } from "../recursos/peliculas";

export default function CrearPelicula() {
  const [form, setForm] = useState<Omit<Pelicula, "id">>({
    titulo: "",
    anio: "",
    director: "",
    duracion: "",
    sinopsis: "",
    generos: [],
    cover: "",
    imagen: "",
    popular: false,
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
        popular: false,
        puntuacion: 0,
        imagenPresentacion: "",
        trailer: "",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleGenerosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const generos = value.split(",").map((g) => g.trim());
    setForm((prev) => ({ ...prev, generos }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <>
      <div className="h-15" />
      <div className="flex justify-center items-center px-4 animate-fade-up animate-ease-in-out">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl p-8 bg-zinc-900 rounded-xl shadow-lg space-y-8 text-white"
        >
          <h2 className="text-4xl font-bold text-center text-red-500">
            Crear Nueva Película
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <section className="space-y-5">
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
                    className="block font-semibold text-gray-300 mb-1"
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
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="sinopsis"
                  className="block font-semibold text-gray-300 mb-1"
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
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 resize-y text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="generos"
                  className="block font-semibold text-gray-300 mb-1"
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
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </section>

            {/* Right Column */}
            <section className="space-y-5">
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
                    className="block font-semibold text-gray-300 mb-1"
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
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="puntuacion"
                  className="block font-semibold text-gray-300 mb-1"
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
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="flex items-center space-x-3 mt-2">
                <input
                  type="checkbox"
                  id="popular"
                  name="popular"
                  checked={form.popular}
                  onChange={handleChange}
                  className="h-5 w-5 rounded border-zinc-700 text-red-600 focus:ring-red-600"
                />
                <label
                  htmlFor="popular"
                  className="text-gray-300 font-semibold"
                >
                  Popular
                </label>
              </div>
            </section>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isPending ? "Creando..." : "Crear Película"}
            </button>
            {isError && (
              <p className="mt-3 text-red-400 font-semibold text-center">
                {(error as Error).message}
              </p>
            )}
            {isSuccess && (
              <p className="mt-3 text-green-400 font-semibold text-center">
                ¡Película creada!
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

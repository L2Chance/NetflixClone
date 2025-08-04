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
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      <div className="h-15"></div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Crear una Nueva Película
        </h2>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="titulo">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Título"
            value={form.titulo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="anio">
            Año
          </label>
          <input
            type="text"
            id="anio"
            name="anio"
            placeholder="Año"
            value={form.anio}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="director">
            Director
          </label>
          <input
            type="text"
            id="director"
            name="director"
            placeholder="Director"
            value={form.director}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="duracion">
            Duración
          </label>
          <input
            type="text"
            id="duracion"
            name="duracion"
            placeholder="Duración"
            value={form.duracion}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="sinopsis">
            Sinopsis
          </label>
          <textarea
            id="sinopsis"
            name="sinopsis"
            placeholder="Sinopsis"
            value={form.sinopsis}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="generos">
            Géneros (separados por coma)
          </label>
          <input
            type="text"
            id="generos"
            name="generos"
            placeholder="Acción, Comedia, Drama"
            value={form.generos.join(", ")}
            onChange={handleGenerosChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="cover">
            URL del Cover
          </label>
          <input
            type="url"
            id="cover"
            name="cover"
            placeholder="URL del cover"
            value={form.cover}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="imagen">
            URL de la Imagen
          </label>
          <input
            type="url"
            id="imagen"
            name="imagen"
            placeholder="URL de la imagen"
            value={form.imagen}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            className="block mb-1 font-semibold"
            htmlFor="imagenPresentacion"
          >
            URL de la Imagen de Presentación
          </label>
          <input
            type="url"
            id="imagenPresentacion"
            name="imagenPresentacion"
            placeholder="URL de la imagen de presentación"
            value={form.imagenPresentacion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="trailer">
            URL del Trailer
          </label>
          <input
            type="url"
            id="trailer"
            name="trailer"
            placeholder="URL del trailer"
            value={form.trailer}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="puntuacion">
            Puntuación
          </label>
          <input
            type="number"
            id="puntuacion"
            name="puntuacion"
            placeholder="Puntuación"
            value={form.puntuacion}
            min={0}
            max={5}
            step={0.1}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="popular"
            name="popular"
            checked={form.popular}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="popular" className="font-semibold">
            Popular
          </label>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isPending ? "Creando..." : "Crear Película"}
        </button>

        {isError && (
          <p className="mt-2 text-red-600 font-semibold">
            {(error as Error).message}
          </p>
        )}
        {isSuccess && (
          <p className="mt-2 text-green-600 font-semibold">¡Película creada!</p>
        )}
      </form>
    </>
  );
}

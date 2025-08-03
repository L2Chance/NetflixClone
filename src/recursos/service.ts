import peliculas, { getNextId, type Pelicula } from "./peliculas";

// Simula una demora de red
const delay = (ms = 500): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// El servicio con todos los endpoints correctamente tipados
export const movieService = {
  // Endpoint para obtener todas las películas
  async getAllMovies(): Promise<Pelicula[]> {
    await delay(300);
    return peliculas;
  },

  // Endpoint para obtener una película por su ID
  async getMovieById(id: number): Promise<Pelicula> {
    await delay(200);
    const movie = peliculas.find((p) => p.id === id);
    if (!movie) {
      throw new Error("Película no encontrada");
    }
    return movie;
  },

  // Endpoint para crear una nueva película
  async createMovie(nuevaPelicula: Omit<Pelicula, "id">): Promise<Pelicula> {
    await delay(400);
    const peliculaConId: Pelicula = {
      ...nuevaPelicula,
      id: getNextId(),
    };
    peliculas.push(peliculaConId);
    return peliculaConId;
  },

  // Endpoint para actualizar una película existente
  async updateMovie(
    id: number,
    datosActualizados: Partial<Pelicula>
  ): Promise<Pelicula> {
    await delay(400);
    const index = peliculas.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("Película no encontrada");
    }
    peliculas[index] = { ...peliculas[index], ...datosActualizados };
    return peliculas[index];
  },

  // Endpoint para eliminar una película
  async deleteMovie(id: number): Promise<{ success: boolean }> {
    await delay(300);
    const index = peliculas.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("Película no encontrada");
    }
    peliculas.splice(index, 1);
    return { success: true };
  },
};

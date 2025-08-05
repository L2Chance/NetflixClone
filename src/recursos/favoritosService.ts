const FAVORITOS_KEY = "favoritos";

export const favoritosService = {
  get: (): number[] => {
    const data = localStorage.getItem(FAVORITOS_KEY);
    return data ? JSON.parse(data) : [];
  },
  add: (id: number) => {
    const current = favoritosService.get();
    if (!current.includes(id)) {
      localStorage.setItem(FAVORITOS_KEY, JSON.stringify([...current, id]));
    }
  },
  remove: (id: number) => {
    const current = favoritosService.get();
    const updated = current.filter((favId) => favId !== id);
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(updated));
  },
  isFavorite: (id: number): boolean => {
    return favoritosService.get().includes(id);
  },
};

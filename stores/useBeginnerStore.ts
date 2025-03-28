import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Favorite {
  item: string;
}

interface BeginnerState {
  // counter
  count: number;
  increment: () => void;
  decrement: () => void;

  // username
  username: string;
  updateUsername: (username: string) => void;

  // favorite list
  favorites: Favorite[];
  addFavorite: (item: Favorite) => void;
}

export const useBeginnerStore = create<BeginnerState>()(
  persist(
    (set) => ({
      // counter
      count: 0,
      increment() {
        set((state) => ({
          count: state.count + 1,
        }));
      },
      decrement() {
        set((state) => ({
          count: state.count - 1,
        }));
      },

      // username
      username: "Taliya",
      updateUsername: (username) => set({ username }),

      // favorite list
      // kalau cuma buat nyimpen sebagian pake partialize, kalau semua pake persists
      favorites: [],
      addFavorite(item) {
        set((state) => ({
          favorites: [...state.favorites, item],
        }));
      },
    }),
    {
      name: "storage",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);

// komponen selain yg menggunakan store ini tdk akan rerender
export const useUsername = () => useBeginnerStore((state) => state.username);
export const useUpdateUsername = () =>
  useBeginnerStore((state) => state.updateUsername);
export const useFavorites = () => useBeginnerStore((state) => state.favorites);
export const useAddFavorites = () =>
  useBeginnerStore((state) => state.addFavorite);

import { useEffect, useState } from "react";
import { getFavorites, saveFavorites } from "@/helpers/favorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => getFavorites());

  const toggleFavorite = (user) => {
    const id = user.id?.value;
    if (!id) return;
    setFavorites((prev) => {
      const updated = { ...prev };
      if (updated[id]) delete updated[id];
      else updated[id] = user;
      return updated;
    });
  };

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return { favorites, toggleFavorite };
}

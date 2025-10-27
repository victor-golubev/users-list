import { useState, useMemo, useEffect } from "react";
import { getFavorites, saveFavorites } from "@/helpers/favorites";

export default function useFavorites(users = []) {
  const [favorites, setFavorites] = useState(() => {
    const saved = getFavorites();
    return Array.isArray(saved) ? saved : [];
  });

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (userId) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const favoriteUsers = useMemo(() => {
    if (!Array.isArray(users) || !Array.isArray(favorites)) {
      return [];
    }
    return users.filter(
      (user) => user?.id?.value && favorites.includes(user.id.value)
    );
  }, [users, favorites]);

  return { favorites, favoriteUsers, toggleFavorite, setFavorites };
}

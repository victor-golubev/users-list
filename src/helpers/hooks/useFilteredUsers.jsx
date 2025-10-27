import { useState, useMemo } from "react";

function useFilteredUsers(favoriteUsers = []) {
  const [searchValue, setSearchValue] = useState("");

  const filteredFavorites = useMemo(() => {
    return favoriteUsers.filter(
      (user) =>
        user?.name?.first?.toLowerCase().includes(searchValue.toLowerCase()) ||
        user?.name?.last?.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [favoriteUsers, searchValue]);

  return { filteredFavorites, searchValue, setSearchValue };
}

export default useFilteredUsers;

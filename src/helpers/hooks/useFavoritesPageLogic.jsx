import { useState } from "react";
import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import useFavorites from "@/helpers/hooks/useFavorites";
import useEditUser from "@/helpers/hooks/useEditUser";
import useAddUser from "@/helpers/hooks/useAddUser";
import useFilteredUsers from "@/helpers/hooks/useFilteredUsers";

export default function useFavoritesPageLogic() {
  const { users, setUsers, isLoading, error } = useFetchUsers();
  const { favorites, favoriteUsers, toggleFavorite, setFavorites } =
    useFavorites(users);
  const { filteredFavorites, searchValue, setSearchValue } =
    useFilteredUsers(favoriteUsers);

  const [addUser, setAddUser] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const { handleAddUser } = useAddUser(setUsers, setFavorites);
  const { handleUserUpdate } = useEditUser(setUsers);

  return {
    isLoading,
    error,
    filteredFavorites,
    searchValue,
    setSearchValue,
    favorites,
    toggleFavorite,
    addUser,
    setAddUser,
    handleAddUser,
    editingUser,
    setEditingUser,
    handleUserUpdate,
  };
}

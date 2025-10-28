import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import useFavorites from "@/helpers/hooks/useFavorites";
import useEditUser from "@/helpers/hooks/useEditUser";

export default function useHomePageLogic() {
  const { users, setUsers, isLoading, error } = useFetchUsers();
  const { favorites, toggleFavorite } = useFavorites(users);
  const { editingUser, setEditingUser, handleUserUpdate } =
    useEditUser(setUsers);

  return {
    users,
    favorites,
    isLoading,
    error,
    toggleFavorite,
    editingUser,
    setEditingUser,
    handleUserUpdate,
  };
}

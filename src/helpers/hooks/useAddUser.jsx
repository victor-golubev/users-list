import { useState } from "react";
import { getUsers, saveUsers } from "../users";
import { getFavorites, saveFavorites } from "../favorites";

function useAddUser(setUsers, setFavorites) {
  const [addUser, setAddUser] = useState(false);

  const handleAddUser = (newUser) => {
    try {
      const currentUsers = getUsers();

      const userExists = currentUsers.some(
        (user) => user.id.value === newUser.id.value
      );

      if (userExists) {
        console.warn("Пользователь с таким ID уже существует");
        return;
      }

      const updatedUsers = [...currentUsers, newUser];
      saveUsers(updatedUsers);
      setUsers(updatedUsers);

      const currentFavorites = getFavorites();
      const updatedFavorites = [...currentFavorites, newUser.id.value];
      saveFavorites(updatedFavorites);
      setFavorites(updatedFavorites);

      setAddUser(false);
    } catch (error) {
      console.error("Ошибка при добавлении пользователя:", error);
    }
  };

  return { addUser, setAddUser, handleAddUser };
}

export default useAddUser;

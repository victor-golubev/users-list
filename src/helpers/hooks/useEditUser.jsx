import { useState } from "react";
import { updateUserEverywhere } from "../users";
import useFetchUsers from "./useFetchUsers";

function useEditUser(setUsers) {
  const [editingUser, setEditingUser] = useState(null);

  const handleUserUpdate = (updatedUser) => {
    setUsers(updateUserEverywhere(updatedUser));
    setEditingUser(null);
  };

  return { editingUser, setEditingUser, handleUserUpdate };
}

export default useEditUser;

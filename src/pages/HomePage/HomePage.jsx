import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard/UserCard";
import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import style from "./style.module.css";
import useFavorites from "@/helpers/hooks/useFavorites";
import UserForm from "@/components/UserEditForm.jsx/UserEditForm";
import { saveUsers, updateUserEverywhere } from "@/helpers/users";
import Modal from "@/components/Modal/Modal";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const { data, isLoading, error } = useFetchUsers(API_URL);
  const { favorites, toggleFavorite } = useFavorites();
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    if (data?.length) {
      setUsers(data);
    }
  }, [data]);

  const handleUserUpdate = (updatedUser) => {
    setUsers(updateUserEverywhere(updatedUser));
    setEditingUser(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className={style.users}>
      <h1 className="title">Список пользователей</h1>
      <div className={style.users_list}>
        {users?.map((user) => (
          <UserCard
            key={user.id.value}
            user={user}
            isFavorite={!!favorites[user.id.value]}
            onToggleFavorite={toggleFavorite}
            onEdit={setEditingUser}
          />
        ))}
      </div>
      {editingUser && (
        <Modal
          user={editingUser}
          onUserUpdate={handleUserUpdate}
          onEdit={setEditingUser}
        />
      )}
    </section>
  );
}

export default HomePage;

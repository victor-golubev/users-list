import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard/UserCard";
import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import style from "./style.module.css";
import useFavorites from "@/helpers/hooks/useFavorites";
import UserForm from "@/components/UserForm.jsx/UserForm";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const { data, isLoading, error } = useFetchUsers(API_URL);
  const { favorites, toggleFavorite } = useFavorites();
  const [editingUser, setEditingUser] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <section className={style.users}>
      <h1 className="title">Список пользователей</h1>
      <div className={style.users_list}>
        {data?.map((user) => (
          <UserCard
            key={user.id.value}
            user={user}
            isFavorite={!!favorites[user.id.value]}
            onToggleFavorite={toggleFavorite}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {editingUser && <UserForm user={editingUser} />}
    </section>
  );
}

export default HomePage;

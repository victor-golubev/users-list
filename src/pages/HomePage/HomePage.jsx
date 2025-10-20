import UserCard from "@/components/UserCard/UserCard";
import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import style from "./style.module.css";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const { data, isLoading, error } = useFetchUsers(API_URL);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleFavorite = (user) => {
    setFavorites((prev) => {
      const updated = [...prev, user];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <section className={style.users}>
      <h1 className={style.title}>Список пользователей</h1>
      <div className={style.users_list}>
        {data?.map((user) => (
          <UserCard
            key={user.id.value}
            user={user}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;

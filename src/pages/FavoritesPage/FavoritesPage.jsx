import UserCard from "@/components/UserCard/UserCard";
import style from "./style.module.css";
import { useState } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <>
      <section className={style.users}>
        <h1 className={style.title}>Избранные</h1>
        <div className={style.users_list}>
          {favorites?.map((user) => (
            <UserCard key={user.id.value} user={user} />
          ))}
        </div>
      </section>
    </>
  );
}

export default FavoritesPage;

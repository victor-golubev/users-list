import UserCard from "@/components/UserCard/UserCard";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput/SearchInput";
import useFavorites from "@/helpers/hooks/useFavorites";

function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filtered = Object.values(favorites).filter(
      (user) =>
        user.name.first.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredFavorites(filtered);
  }, [searchValue, favorites]);

  return (
    <>
      <section className={style.users}>
        <h1 className="title">Избранные</h1>

        <SearchInput value={searchValue} onChange={setSearchValue} />

        <div className={style.users_list}>
          {filteredFavorites?.map((user) => (
            <UserCard
              key={user.id.value}
              user={user}
              isFavorite={!!favorites[user.id.value]}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        <button className={style.add}>Добавить пользователя</button>
      </section>
    </>
  );
}

export default FavoritesPage;

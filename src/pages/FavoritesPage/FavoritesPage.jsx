import UserCard from "@/components/UserCard/UserCard";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput/SearchInput";
import useFavorites from "@/helpers/hooks/useFavorites";
import Modal from "@/components/Modal/Modal";
import { updateUserEverywhere } from "@/helpers/users";

function FavoritesPage() {
  const { favorites, toggleFavorite, updateFavorite } = useFavorites();
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [addUser, setAddUser] = useState(false);

  useEffect(() => {
    const filtered = Object.values(favorites).filter(
      (user) =>
        user.name.first.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredFavorites(filtered);
  }, [searchValue, favorites]);

  const handleUserUpdate = (updatedUser) => {
    updateFavorite(updatedUser);
    updateUserEverywhere(updatedUser);
    setEditingUser(null);
  };

  const handleAddUser = (newUser) => {
    updateFavorite(newUser);
    setAddUser(false);
  };

  return (
    <section className={style.users}>
      <h1 className="title">Избранные</h1>

      {filteredFavorites.length > 0 ? (
        <>
          <SearchInput value={searchValue} onChange={setSearchValue} />

          <div className={style.users_list}>
            {filteredFavorites.map((user) => (
              <UserCard
                key={user.id.value}
                user={user}
                isFavorite={!!favorites[user.id.value]}
                onToggleFavorite={toggleFavorite}
                onEdit={setEditingUser}
              />
            ))}
          </div>
        </>
      ) : (
        <h3 className={style.empty}>Список пуст</h3>
      )}

      <button className={style.add} onClick={() => setAddUser(true)}>
        Добавить пользователя
      </button>

      {addUser && (
        <Modal onClose={() => setAddUser(false)} onUserAdd={handleAddUser} />
      )}

      {editingUser && (
        <Modal
          user={editingUser}
          onUserUpdate={handleUserUpdate}
          onClose={() => setEditingUser(null)}
        />
      )}
    </section>
  );
}

export default FavoritesPage;

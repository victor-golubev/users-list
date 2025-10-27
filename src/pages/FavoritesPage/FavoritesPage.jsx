import UserCard from "@/components/UserCard/UserCard";
import style from "./style.module.css";
import Modal from "@/components/Modal/Modal";

import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import useFavorites from "@/helpers/hooks/useFavorites";
import useEditUser from "@/helpers/hooks/useEditUser";
import useAddUser from "@/helpers/hooks/useAddUser";
import useFilteredUsers from "@/helpers/hooks/useFilteredUsers";

function FavoritesPage() {
  const { users, setUsers, isLoading, error } = useFetchUsers();
  const { editingUser, setEditingUser, handleUserUpdate } =
    useEditUser(setUsers);
  const { favorites, favoriteUsers, toggleFavorite, setFavorites } =
    useFavorites(users);
  const { filteredFavorites, searchValue, setSearchValue } =
    useFilteredUsers(favoriteUsers);

  const { addUser, setAddUser, handleAddUser } = useAddUser(
    setUsers,
    setFavorites
  );

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <section className={style.users}>
      <h1 className="title">Избранные</h1>

      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите имя для поиска"
        className={style.input}
      />

      {filteredFavorites.length > 0 ? (
        <>
          <div className={style.users_list}>
            {filteredFavorites.map((user) => (
              <UserCard
                key={user.id.value}
                user={user}
                isFavorite={favorites.includes(user.id.value)}
                onToggleFavorite={() => toggleFavorite(user.id.value)}
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

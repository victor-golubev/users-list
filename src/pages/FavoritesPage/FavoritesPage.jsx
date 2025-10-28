import UserAddForm from "@/components/UserAddForm.jsx/UserAddForm";
import style from "./style.module.css";
import Modal from "@/components/Modal/Modal";
import UserCard from "@/components/UserCard/UserCard";
import UserEditForm from "@/components/UserEditForm.jsx/UserEditForm";
import useFavoritesPageLogic from "@/helpers/hooks/useFavoritesPageLogic";

function FavoritesPage() {
  const {
    isLoading,
    error,
    filteredFavorites,
    searchValue,
    setSearchValue,
    favorites,
    toggleFavorite,
    addUser,
    setAddUser,
    handleAddUser,
    editingUser,
    setEditingUser,
    handleUserUpdate,
  } = useFavoritesPageLogic();

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
        <div className={style.users_list}>
          {filteredFavorites.map((user) => (
            <UserCard
              key={user.id.value || user.id}
              user={user}
              isFavorite={favorites.includes(user.id.value || user.id)}
              onToggleFavorite={() => toggleFavorite(user.id.value || user.id)}
              onEdit={setEditingUser}
            />
          ))}
        </div>
      ) : (
        <h3 className={style.empty}>Список пуст</h3>
      )}

      <button className={style.add} onClick={() => setAddUser(true)}>
        Добавить пользователя
      </button>

      {addUser && (
        <Modal onClose={() => setAddUser(false)}>
          <UserAddForm
            onUserAdd={handleAddUser}
            onClose={() => setAddUser(false)}
          />
        </Modal>
      )}

      {editingUser && (
        <Modal onClose={() => setEditingUser(null)}>
          <UserEditForm
            user={editingUser}
            onUserUpdate={handleUserUpdate}
            onClose={() => setEditingUser(null)}
          />
        </Modal>
      )}
    </section>
  );
}

export default FavoritesPage;

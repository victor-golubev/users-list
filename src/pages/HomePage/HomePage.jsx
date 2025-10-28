import useFetchUsers from "@/helpers/hooks/useFetchUsers";
import useFavorites from "@/helpers/hooks/useFavorites";
import useEditUser from "@/helpers/hooks/useEditUser";
import style from "./style.module.css";
import Modal from "@/components/Modal/Modal";
import UsersList from "@/components/UsersList/UsersList";

function HomePage() {
  const { users, setUsers, isLoading, error } = useFetchUsers();
  const { favorites, toggleFavorite } = useFavorites(users);
  const { editingUser, setEditingUser, handleUserUpdate } =
    useEditUser(setUsers);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <section className={style.users}>
      <h1 className={style.title}>Список пользователей</h1>

      <UsersList
        users={users}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onEdit={setEditingUser}
      />

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

export default HomePage;

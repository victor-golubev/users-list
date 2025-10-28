import style from "./style.module.css";
import Modal from "@/components/Modal/Modal";
import UserEditForm from "@/components/UserEditForm.jsx/UserEditForm";
import UsersList from "@/components/UsersList/UsersList";
import useHomePageLogic from "@/helpers/hooks/useHomePageLogic";

function HomePage() {
  const {
    users,
    favorites,
    isLoading,
    error,
    toggleFavorite,
    editingUser,
    setEditingUser,
    handleUserUpdate,
  } = useHomePageLogic();

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

export default HomePage;

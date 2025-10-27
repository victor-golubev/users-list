import UserCard from "../UserCard/UserCard";
import style from "./style.module.css";

function UsersList({ users, favorites, onToggleFavorite, onEdit }) {
  if (!users) {
    return <p>Нет данных</p>;
  }

  if (users.length === 0) {
    return <p>Пользователи не найдены</p>;
  }

  return (
    <div className={style.users_list}>
      {users.map((user, index) => {
        return (
          <UserCard
            key={user.id.value}
            user={user}
            isFavorite={favorites.includes(user.id.value)}
            onToggleFavorite={() => onToggleFavorite(user.id.value)}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}

export default UsersList;

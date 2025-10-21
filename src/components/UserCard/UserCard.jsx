import style from "./style.module.css";

function UserCard({ user, isFavorite, onToggleFavorite, onEdit }) {
  const img = user.picture.large;
  return (
    <div className={style.user}>
      <img src={img} alt={user.name.first} className={style.photo} />
      <p className={style.name}>
        <span>Имя:</span> {user.name.first}
      </p>
      <p className={style.surname}>
        <span>Фамилия:</span> {user.name.last}
      </p>
      <p className={style.age}>
        <span>Возраст:</span> {user.dob.age}
      </p>

      <button
        className={
          isFavorite ? `${style.button} ${style.active}` : style.button
        }
        onClick={() => onToggleFavorite(user)}
      >
        {isFavorite ? `Удалить из избранного` : `Добавить в избранное`}
      </button>
      <button onClick={() => onEdit(user)}>Редактировать</button>
    </div>
  );
}

export default UserCard;

import style from "./style.module.css";

function UserCard({ user, onFavorite }) {
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
      <button className={style.button} onClick={() => onFavorite(user)}>
        В избранное
      </button>
    </div>
  );
}

export default UserCard;

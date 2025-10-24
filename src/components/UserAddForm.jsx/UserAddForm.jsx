import { useForm } from "react-hook-form";
import { getFavorites, saveFavorites } from "@/helpers/favorites";
import style from "./style.module.css";

function UserAddForm({ onUserAdd, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newUser = {
      id: { value: Date.now() },
      picture: { large: data.photo },
      name: { first: data.firstname, last: data.lastname },
      dob: { age: data.age },
    };

    const favorites = getFavorites();
    const updatedFavorites = { ...favorites, [newUser.id.value]: newUser };
    saveFavorites(updatedFavorites);

    onUserAdd(newUser);

    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <label>
        Ссылка на фото
        <input
          {...register("photo", { required: "Фото обязательно" })}
          placeholder="Введите адрес фото"
        />
        {errors.photo && <p>{errors.photo.message}</p>}
      </label>

      <label>
        Имя
        <input
          {...register("firstname", { required: "Имя обязательно" })}
          placeholder="Введите имя"
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}
      </label>

      <label>
        Фамилия
        <input
          {...register("lastname", { required: "Фамилия обязательна" })}
          placeholder="Введите фамилию"
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </label>

      <label>
        Возраст
        <input
          {...register("age", {
            required: "Возраст обязателен",
            valueAsNumber: true,
            min: { value: 0, message: "Возраст не может быть отрицательным" },
          })}
          placeholder="Введите возраст"
          type="number"
        />
        {errors.age && <p>{errors.age.message}</p>}
      </label>

      <button type="submit">Добавить</button>
    </form>
  );
}

export default UserAddForm;

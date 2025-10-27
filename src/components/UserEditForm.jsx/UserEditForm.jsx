import { useForm } from "react-hook-form";
import { getFavorites, saveFavorites } from "@/helpers/favorites";
import { getUsers, saveUsers } from "@/helpers/users";
import style from "./style.module.css";
import { updateUserEverywhere } from "@/helpers/users";

function UserEditForm({ user, onUserUpdate, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      photo: user?.picture?.large || "",
      firstname: user?.name?.first || "",
      lastname: user?.name?.last || "",
      age: user?.dob?.age || "",
    },
  });

  const onSubmit = (data) => {
    if (!user?.id?.value) {
      console.error("У пользователя нет ID");
      return;
    }

    const updatedUser = {
      ...user,
      picture: { ...user.picture, large: data.photo },
      name: { first: data.firstname, last: data.lastname },
      dob: { ...user.dob, age: data.age },
    };

    updateUserEverywhere(updatedUser);
    onUserUpdate(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <label>
        Ссылка на фото
        <input
          {...register("photo", { required: "Фото обязательно" })}
          placeholder="Введите адрес фото"
        />
      </label>
      {errors.photo && <p>{errors.photo.message}</p>}

      <label>
        Имя
        <input
          {...register("firstname", { required: "Имя обязательно" })}
          placeholder="Введите имя"
        />
      </label>
      {errors.firstname && <p>{errors.firstname.message}</p>}

      <label>
        Фамилия
        <input
          {...register("lastname", { required: "Фамилия обязательна" })}
          placeholder="Введите фамилию"
        />
      </label>
      {errors.lastname && <p>{errors.lastname.message}</p>}

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
      </label>
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Изменить</button>
      <button type="button" onClick={onClose} className={style.cancel}>
        Отмена
      </button>
    </form>
  );
}

export default UserEditForm;

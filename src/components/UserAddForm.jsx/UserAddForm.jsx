import { useForm } from "react-hook-form";
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
      id: {
        value: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      },
      picture: {
        large: data.photo || "",
        medium: data.photo || "",
        thumbnail: data.photo || "",
      },
      name: {
        first: data.firstname,
        last: data.lastname,
      },
      dob: {
        age: parseInt(data.age) || 0,
      },
      email: "",
      phone: "",
      location: {
        city: "",
        country: "",
      },
    };

    onUserAdd(newUser);
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <label>
        Ссылка на фото
        <input
          {...register("photo")}
          placeholder="Введите адрес фото (опционально)"
        />
      </label>

      <label>
        Имя
        <input
          {...register("firstname", { required: "Имя обязательно" })}
          placeholder="Введите имя"
        />
        {errors.firstname && (
          <p className={style.error}>{errors.firstname.message}</p>
        )}
      </label>

      <label>
        Фамилия
        <input
          {...register("lastname", { required: "Фамилия обязательна" })}
          placeholder="Введите фамилию"
        />
        {errors.lastname && (
          <p className={style.error}>{errors.lastname.message}</p>
        )}
      </label>

      <label>
        Возраст
        <input
          {...register("age", {
            required: "Возраст обязателен",
            valueAsNumber: true,
            min: { value: 0, message: "Возраст не может быть отрицательным" },
            max: { value: 150, message: "Возраст должен быть реалистичным" },
          })}
          placeholder="Введите возраст"
          type="number"
        />
        {errors.age && <p className={style.error}>{errors.age.message}</p>}
      </label>

      <div className={style.buttons}>
        <button type="submit">Добавить</button>
        <button type="button" onClick={onClose} className={style.cancel}>
          Отмена
        </button>
      </div>
    </form>
  );
}

export default UserAddForm;

import { useForm } from "react-hook-form";
import { getFavorites, saveFavorites } from "@/helpers/favorites";
import { getUsers, saveUsers } from "@/helpers/users";

function UserForm({ user }) {
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
    const favorites = getFavorites();
    const editingUser = favorites[user.id.value];

    if (!editingUser) {
      console.error("Пользователь не найден в избранном!");
      return;
    }

    const updatedUser = {
      ...editingUser,
      picture: { ...editingUser.picture, large: data.photo },
      name: { first: data.firstname, last: data.lastname },
      dob: { ...editingUser.dob, age: data.age },
    };

    const updatedFavorites = { ...favorites, [user.id.value]: updatedUser };

    saveFavorites(updatedFavorites);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("photo", { required: "Фото обязательно" })}
        placeholder="Введите адрес фото"
      />
      {errors.photo && <p>{errors.photo.message}</p>}

      <input
        {...register("firstname", { required: "Имя обязательно" })}
        placeholder="Введите имя"
      />
      {errors.firstname && <p>{errors.firstname.message}</p>}

      <input
        {...register("lastname", { required: "Фамилия обязательна" })}
        placeholder="Введите фамилию"
      />
      {errors.lastname && <p>{errors.lastname.message}</p>}

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

      <button type="submit">Изменить</button>
    </form>
  );
}

export default UserForm;

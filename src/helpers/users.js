import { getFavorites, saveFavorites } from "./favorites";

const USERS_KEY = "users";

export function updateUserEverywhere(updatedUser) {
  const users = getUsers();
  const updatedUsers = users.map((u) =>
    u.id.value === updatedUser.id.value ? updatedUser : u
  );
  saveUsers(updatedUsers);

  const favorites = getFavorites();

  return updatedUsers;
}

export const getUsers = () => {
  try {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

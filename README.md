# Users List

Веб-приложение для отображения списка пользователей с возможностью редактирования, добавления и добавления в избранное.

## Функционал
- Загрузка списка пользователей из API или `localStorage`
- Добавление нового пользователя вручную
- Редактирование существующих пользователей
- Добавление и удаление пользователей из избранного
- Поиск по имени среди избранных
- Сохранение данных и избранных пользователей в `localStorage`

## Стек
- HTML, CSS, JavaScript
- React, React Router
- Vite
- Lucide React (иконки)

## Структура проекта
- `components/` — UI-компоненты (`UserCard`, `UsersList`, `Modal`)
- `pages/` — страницы приложения (`HomePage`, `FavoritesPage`)
- `helpers/` — вспомогательные функции и кастомные хуки (`useFetchUsers`, `useFavorites`, `useEditUser`, `useAddUser`)
- `assets/` — стили и изображения

## Установка и запуск
```bash
git clone https://github.com/victor-golubev/users-list.git
cd users-list
npm install
npm run dev
```

Приложение будет доступно по http://localhost:5173.

## Ссылка на проект

[Weatherly на Vercel](https://users-list-steel.vercel.app/)

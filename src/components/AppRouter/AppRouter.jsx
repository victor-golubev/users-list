import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage";
import HomePage from "@/pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<p>Страница не найдена</p>} />
    </Routes>
  );
}

export default AppRouter;

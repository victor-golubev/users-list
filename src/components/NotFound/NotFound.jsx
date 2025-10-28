import { Link } from "react-router-dom";
import style from "./style.module.css";

function NotFound() {
  return (
    <div className={style.notfound}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;

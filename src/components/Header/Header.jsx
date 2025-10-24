import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";

function Header() {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        UsersApp
      </Link>

      <nav className={style.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Избранное
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

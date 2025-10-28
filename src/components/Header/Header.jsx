import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";

function Header() {
  const getLinkClassName = ({ isActive }) =>
    `${style.link} ${isActive ? style.active : ""}`;
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        UsersApp
      </Link>

      <nav className={style.nav}>
        <NavLink to="/" end className={getLinkClassName}>
          Главная
        </NavLink>

        <NavLink to="/favorites" className={getLinkClassName}>
          Избранное
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

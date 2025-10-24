import { useState } from "react";
import style from "./style.module.css";

function SearchInput({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введите имя для поиска"
        className={style.input}
      />
    </>
  );
}

export default SearchInput;

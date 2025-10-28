import style from "./style.module.css";

function Modal({ children, onClose }) {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {children}
        <button className={style.closeBtn} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default Modal;

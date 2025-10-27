import UserAddForm from "../UserAddForm.jsx/UserAddForm";
import UserEditForm from "../UserEditForm.jsx/UserEditForm";
import style from "./style.module.css";

function Modal({ user, onUserUpdate, onUserAdd, onClose }) {
  const isEditing = Boolean(user);
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {isEditing ? (
          <UserEditForm
            user={user}
            onUserUpdate={onUserUpdate}
            onClose={onClose}
          />
        ) : (
          <UserAddForm onUserAdd={onUserAdd} onClose={onClose} />
        )}
        <button className={style.closeBtn} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default Modal;

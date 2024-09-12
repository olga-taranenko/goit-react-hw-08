import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectAuthUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const handleClickLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.text}>Welcome, {user.name}!</p>
      <button className={css.logoutBtn} onClick={handleClickLogOut}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

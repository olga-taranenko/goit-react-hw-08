import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectAuthError } from "../../redux/auth/selectors";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div>
      <h2>Log in</h2>
      <LoginForm />
      {error && (
        <p className={css.errorText}>
          Oops, the login or password is incorrect... {error}
        </p>
      )}
    </div>
  );
};

export default LoginPage;

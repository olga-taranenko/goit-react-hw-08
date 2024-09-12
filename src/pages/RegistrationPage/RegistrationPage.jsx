import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
import { selectAuthError } from "../../redux/auth/selectors";

const RegistrationPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div>
      <h2 className={css.title}>Registration</h2>
      <RegistrationForm />
      {error && (
        <p className={css.errorText}>
          Oops, the login or password is incorrect... {error}
        </p>
      )}
    </div>
  );
};

export default RegistrationPage;

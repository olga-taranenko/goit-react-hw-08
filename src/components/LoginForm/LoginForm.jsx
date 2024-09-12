import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Minimum 8 characters")
    .max(100, "Too Long!"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              placeholder="john.example@gmail.com"
              className={css.input}
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={css.input}
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

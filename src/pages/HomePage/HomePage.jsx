import css from "./HomePage.module.css";
import { RiContactsBook3Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>
        Welcome to our PhoneBook App&ensp;
        <RiContactsBook3Line width="24" height="24" />
      </h1>
      <p>To log in, please enter your email and password or register</p>
    </div>
  );
};

export default HomePage;

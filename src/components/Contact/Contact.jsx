import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully");
      });
  };

  return (
    <div className={css.contactItem}>
      <div className={css.textWrap}>
        <p className={css.contactName}>
          <FaUser />
          &ensp;{name}
        </p>
        <p className={css.contactPhone}>
          <BsFillTelephoneFill />
          &ensp;{number}
        </p>
      </div>
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
        type="button"
        className={css.deleteContactBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

import { FaUser, FaPhoneAlt  } from "react-icons/fa";
import css from './Contact.module.css'
export default function Contact({ item: { name, number, id }, onDelete }) {
  return (
    <div className={css.wrapper}>
      <div>
        <h2>
          <FaUser color="#4682B4" size={20} />
          {name}
        </h2>
        <p className={css.text}>
          <FaPhoneAlt color="#4682B4" size={20} />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
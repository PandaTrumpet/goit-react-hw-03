import css from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.contactItemContainer}>
      <div>
        <div className={css.nameContainer}>
          <RiContactsLine />
          <p>{name}</p>
        </div>
        <div className={css.numberContainer}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

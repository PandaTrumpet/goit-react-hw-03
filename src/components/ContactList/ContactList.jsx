import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map((el) => {
          return (
            <li key={el.id}>
              <Contact data={el} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

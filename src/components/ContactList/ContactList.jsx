import Contact from "../Contact/Contact";
export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul>
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

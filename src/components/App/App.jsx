import { useState } from "react";
// import css from "./App.module.css";
import contacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
const App = () => {
  const [contact, setContact] = useState(contacts);
  const [search, setSearch] = useState("");

  const searchContact = contact.filter((el) =>
    el.name.includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setContact((beforeContacts) => {
      return [...beforeContacts, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContact((beforeContact) => {
      return beforeContact.filter((contact) => contact.id !== contactId);
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />
      <SearchBox value={search} onChange={setSearch} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;

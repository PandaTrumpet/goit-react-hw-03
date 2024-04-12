import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import contacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
const App = () => {
  const [contact, setContact] = useState(contacts);
  const [search, setSearch] = useState("");

  const searchContact = contact.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setContact((beforeContacts) => {
      const updatedContacts = [...beforeContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContact(storedContacts);
    }
  }, []);
  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });

    actions.resetForm();
  };

  const deleteContact = (contactId) => {
    setContact((beforeContact) => {
      return beforeContact.filter((contact) => contact.id !== contactId);
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm forSubmit={handleSubmit} />
      <SearchBox value={search} onChange={setSearch} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;

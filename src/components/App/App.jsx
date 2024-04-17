import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'



export default function App() {
  const [items, setItems] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts !== null
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [items]);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const filterValues = items.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setItems((prevcontacts) => {
      return [...prevcontacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setItems((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={inputValue} onFilter={handleInputValue} />
      <ContactList items={filterValues} onDelete={deleteContact} />
    </div>
  );
}


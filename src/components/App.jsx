import { ContactForm } from "./ContactForm/ContactForm";
import { GlobalStyle } from "components/GlobalStyle";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useEffect, useState } from "react";

const getContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts)
  }
}

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!contacts) {
      return
    }
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])


  // const changeFilter = e => {
  //  setFilter(e.currentTarget.value)
  // }

 const filteredList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = contactId => {
setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
}

 return (
      <div style={{margin: "30px"}}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2 style={{marginBottom: "10px"}}>Contacts</h2>
        <Filter value={filter} />
        <ContactList contacts={filteredList()} onDelete={handleDelete} />
        <GlobalStyle/>
      </div>
  )
}
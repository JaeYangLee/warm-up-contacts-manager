import ContactList from "./components/ContactList";
import NavBar from "./components/NavBar";
import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = async () => {
    try {
      const allContacts = await axios.get(`http://localhost:5000/contacts`);
      setContacts(allContacts.data.data);
    } catch (err) {
      console.error("[frontend]: Error fetching all contacts", err.message);
    }
  };

  const createContact = async (
    first_name,
    last_name,
    contact_number,
    email_address,
  ) => {
    try {
      const newContact = await axios.post(`http://localhost:5000/contacts`, {
        first_name,
        last_name,
        contact_number,
        email_address,
      });
      setContacts([...contacts, newContact.data.data]);
    } catch (err) {
      console.error("[frontend]: Error creating new contact!", err.message);
    }
  };

  const updateContact = async (
    contact_id,
    first_name,
    last_name,
    contact_number,
    email_address,
  ) => {
    try {
      const updatedContact = await axios.put(
        `http://localhost:5000/contacts/${contact_id}`,
        { contact_id, first_name, last_name, contact_number, email_address },
      );

      setContacts(
        contacts.map((contacts) =>
          contacts.id === contact_id ? updatedContact.data.data : contacts,
        ),
      );
    } catch (err) {
      console.error("[frontend]: Error updating contact!", err.message);
    }
  };

  const deleteContact = async (contact_id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${contact_id}`);
      setContacts(contacts.filter((contacts) => contacts.id !== contact_id));
    } catch (err) {
      console.error("[frontend]: Error deleting contacts!", err.message);
    }
  };

  return (
    <>
      <div>
        <NavBar onAdd={createContact} />
        <ContactList
          contacts={contacts}
          onUpdate={updateContact}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}

export default App;

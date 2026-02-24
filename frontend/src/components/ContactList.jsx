import ContactItem from "./ContactItem";

function ContactList({ contacts = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="w-screen h-screen pt-14">
        {contacts.length === 0 ? (
          <h1>No contacts...</h1>
        ) : (
          contacts.map((contacts) => (
            <ContactItem
              key={contacts.contact_id}
              contact={contacts}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </>
  );
}

export default ContactList;

function ContactItem({ contact, onUpdate, onDelete }) {
  return (
    <>
      <li>
        <p>{contact.first_name}</p>
        <p>{contact.contact_number}</p>
        <p>{contact.email_address}</p>
      </li>
    </>
  );
}

export default ContactItem;

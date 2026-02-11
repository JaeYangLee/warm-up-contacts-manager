const pool = require("../database/contactsManagerDatabase");

const getAllContacts = async () => {
  const result = await pool.query("SELECT * FROM contact");
  return result.rows;
};

const createContact = async (
  first_name,
  last_name,
  contact_number,
  email_address,
) => {
  const result = await pool.query(
    "INSERT INTO contact(first_name, last_name, contact_number, email_address) VALUES ($1, $2, $3, $4) RETURNING *",
    [first_name, last_name, contact_number, email_address],
  );
  return result.rows[0];
};

const updateContact = async (
  contact_id,
  first_name,
  last_name,
  contact_number,
  email_address,
) => {
  const result = await pool.query(
    "UPDATE contact SET first_name = $2, last_name = $3, contact_number = $4, email_address = $5 WHERE contact_id = $1 RETURNING *",
    [contact_id, first_name, last_name, contact_number, email_address],
  );
  return result.rows[0];
};

const deleteContact = async (contact_id) => {
  const result = await pool.query(
    "DELETE FROM contact WHERE contact_id = $1 RETURNING *",
    [contact_id],
  );
  return result.rows[0];
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
};

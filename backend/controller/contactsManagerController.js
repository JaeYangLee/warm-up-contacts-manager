const contactsManagerModel = require("../model/contactsManagerModel");

const getAllContacts = async (req, res) => {
  try {
    const allContacts = await contactsManagerModel.getAllContacts();
    res.status(200).json({
      message: "[controller.js]: Fetching all contacts successful!",
      data: allContacts,
    });
  } catch (err) {
    console.error("[controller.js]: Error fetching all contacts", err.message);
    res.status(500).json({ error: "[controller.js]: Server error!" });
  }
};

const createContact = async (req, res) => {
  try {
    const { first_name, last_name, contact_number, email_address } = req.body;
    const newContact = await contactsManagerModel.createContact(
      first_name,
      last_name,
      contact_number,
      email_address,
    );
    res.status(200).json({
      message: "[controller.js]: Creating new contact successful!",
      data: newContact,
    });
  } catch (err) {
    console.error("[controller.js]: Error creating new contact!", err.message);
    res.status(500).json({ error: "[controller.js]: Server error!" });
  }
};

const updateContact = async (req, res) => {
  try {
    const { contact_id } = req.params;
    const { first_name, last_name, contact_number, email_address } = req.body;
    const updatedContact = await contactsManagerModel.updateContact(
      contact_id,
      first_name,
      last_name,
      contact_number,
      email_address,
    );

    if (!updatedContact) {
      return res
        .status(400)
        .json({ message: "[controller.js]: Contact not found..." });
    } else {
      return res.status(200).json({
        message: "[controller.js]: Updating contact successful!",
        data: updatedContact,
      });
    }
  } catch (err) {
    console.error("[controller.js]: Error updating contact!", err.message);
    res.status(500).json("[controller.js]: Server error!");
  }
};

const deleteContact = async (req, res) => {
  try {
    const { contact_id } = req.params;
    const deletedContact = await contactsManagerModel.deleteContact(contact_id);
    if (!deletedContact) {
      return res
        .status(400)
        .json({ message: "[controller.js]: Contact not found..." });
    } else {
      return res
        .status(200)
        .json({ message: "[controller.js]: Contact deleted successfully!" });
    }
  } catch (err) {
    console.error("[controller.js]: Error deleting contact!", err.message);
    res.status(500).json({ message: "[controller.js]: Server error!" });
  }
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
};

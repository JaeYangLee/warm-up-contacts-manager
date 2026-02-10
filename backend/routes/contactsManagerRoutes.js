const contactsManagerController = require("../controller/contactsManagerController");
const express = require("express");
const router = express.Router();

router.get("/", contactsManagerController.getAllContacts);
router.post("/", contactsManagerController.createContact);
router.put("/:contact_id", contactsManagerController.updateContact);
router.delete("/:contact_id", contactsManagerController.deleteContact);

module.exports = router;

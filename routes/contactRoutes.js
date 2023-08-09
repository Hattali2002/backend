const express = require("express");
const router = express.Router();
const {getContacts,getContact,createContact,updateContact,deleteContact} = require("../controller/contactControllers");


router.route("/").get(getContacts).put(createContact);

router.route("/:id").get(getContact).post(updateContact) .delete(deleteContact);
 

module.exports = router;
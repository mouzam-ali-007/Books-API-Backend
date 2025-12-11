const Contact = require("../DBSchema/contact");
const sendEmail = require("../Utilities/emailSender");
const messages = require("../Utilities/responseMessages"); // adjust path if needed

const generateContactEmail = require("../Utilities/emailTemplate"); // adjust if needed


class ContactController {
  

  async getAllContact(req, res) {
    try {
      const allContacts = await Contact.find();
      res.status(200).json({ message: messages.SUCCESS_CONTACT_FETCHED, data: allContacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: messages.ERROR_INTERNAL_SERVER });
    }
  }
}

module.exports = new ContactController();

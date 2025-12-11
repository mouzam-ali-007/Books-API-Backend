const Order = require("../DBSchema/order.js");
const sendEmail = require("../Utilities/emailSender");
const messages = require("../Utilities/responseMessages"); // adjust path if needed
const generateContactEmail = require("../Utilities/emailTemplate"); // adjust if needed


class OrderController {
  async createOrder(req, res) {
    try {
      const { customer, orderStatus, books, subtotal,shipping, grandTotal } = req.body;

      if (!customer || !orderStatus || !books ) {
        return res.status(400).json({ message: messages.ERROR_MISSING_FIELDS });
      }

     
      const { fullName, phone ,email,city, address} = customer;

        //  Check if email already exists
        // const existingContact = await Contact.findOne({ email });
        // if (existingContact) {
        //   return res.status(400).json({ message: "This email has already been submitted." });
        // }

      const newOrder = new Order({
        customer: {
            fullName,
            phone,
            address,
            city,
            email
          },

        
        orderStatus,
        books,
        subtotal,
        shipping,
        grandTotal,
        
      });

      console.log(newOrder)

      await newOrder.save();

      let emailObj= {
        ...newOrder.toObject(),

      }

   

     // Send confirmation email
    const htmlTemplate = generateContactEmail(emailObj);
     await sendEmail(email, "Your Order Details", htmlTemplate);
      res.status(200).json({ message: messages.SUCCESS_CREATED, data: newOrder });

    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: messages.ERROR_INTERNAL_SERVER });
    }
  }

  async getAllOrder(req, res) {
    try {
      const allCOrders = await Order.find();
      res.status(200).json({ message: messages.SUCCESS_CONTACT_FETCHED, data: allCOrders });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: messages.ERROR_INTERNAL_SERVER });
    }
  }
}

module.exports = new OrderController();

const express = require("express");
const multer = require('multer');
const orderController = require("../Controllers/order.controller");


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is the API root!");

});



// Contact Form submission route
router.post('/order', orderController.createOrder);

// Get Al  contacts
router.get('/getAllOrder',  orderController.getAllOrder);

module.exports = router;
 
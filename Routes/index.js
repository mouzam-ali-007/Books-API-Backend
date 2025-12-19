const express = require("express");
const multer = require('multer');
const orderController = require("../Controllers/order.controller");
const reviewController = require("../Controllers/review.controller");


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is the API root!");

});



// Contact Form submission route
router.post('/order', orderController.createOrder);

// Get Al  contacts
router.get('/getAllOrder',  orderController.getAllOrder);

router.get('/getAllReviews',  reviewController.getReviews);

router.post('/submitReview',  reviewController.submitReview);

// Admin approve review
router.post("/review/:id/approve", reviewController.approveReview);


module.exports = router;
 
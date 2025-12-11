const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    books: {
      type: Map,
      of: Number,
      required: true, 
      // Example stored as: { "1": 1, "2": 0, "3": 0 }
    },

    customer: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: false },
      city: { type: String, required: false },
        email: { type: String, required: false  },
    },

    orderStatus: { type: String, default: "Pending" },

    subtotal: { type: Number, required: true },
    shipping: { type: Number, required: true },
    grandTotal: { type: Number, required: true },

    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);

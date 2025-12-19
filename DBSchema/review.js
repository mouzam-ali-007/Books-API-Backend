const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  approvedByAdmin: {
    type: Boolean,
    default: false
  },
  icons: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);

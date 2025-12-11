const mongoose = require("mongoose");

const AlMarinaSchema = new mongoose.Schema(
  {
    zone: { type: String },
    west: {
      type: String,
    },
    east: { type: String },

    south: { type: String },

    north: { type: String },

    total_area: { type: String },

    usage: { type: String },
    isActivePlot: {type: Boolean},

    block_number: { type: String },
    plot_number: { type: String },
    
    property_type: { type: String },
    الغرب: { type: String },
    الشرق: { type: String },
    "الجنوب ": { type: String }, // Note: trailing space is kept for exact match
    الشمال: { type: String },
    " المساحة الاجمالية ": { type: String }, // Note: leading/trailing space
    الاستخدام: { type: String },
    "رقم البلك": { type: String },
    "رقم القطعة ": { type: String }, // Note: trailing space

  },
  { timestamps: true }
);

const AlMarina = mongoose.model("AlMarina", AlMarinaSchema);

module.exports = AlMarina;

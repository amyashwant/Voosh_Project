const mongoose = require("mongoose");

const addSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    sub_total: {
      type: String,
      max: 50,
    },
    phone: {
      type: String,
      max: 300000000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Add", addSchema);

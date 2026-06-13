const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cutoffs: {
    general: { type: Number, required: true },
    obc: { type: Number, required: true },
    sc: { type: Number, required: true },
    st: { type: Number, required: true },
  }
});

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  branches: [branchSchema], // Array of branch objects
  fees: String,
  location: String,
  website: String,
  placement: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("College", collegeSchema);

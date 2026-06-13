const mongoose = require("mongoose");
const crypto = require("crypto");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  score: { type: Number, required: true },
  category: {
    type: String,
    enum: ["general", "obc", "sc", "st"],
    required: true,
  },
  preferredBranch: { type: String, required: true },
  state: { type: String, required: true },
});

// Hash password securely before saving using Node's built-in crypto module
studentSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = crypto.createHash("sha256").update(this.password).digest("hex");
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("Student", studentSchema);

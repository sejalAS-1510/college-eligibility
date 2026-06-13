const { validationResult } = require("express-validator");
const crypto = require("crypto");
const Student = require("../models/Student");

const addStudent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email } = req.body;
    
    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added successfully", student });
  } catch (err) {
    console.error("Error adding student:", err);
    res.status(500).json({ error: "Failed to add student" });
  }
};

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find student by email
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Hash input password and compare
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    if (student.password !== hashedPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", student });
  } catch (err) {
    console.error("Error logging in student:", err);
    res.status(500).json({ error: "Failed to log in" });
  }
};

module.exports = { addStudent, loginStudent };

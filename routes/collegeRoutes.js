const express = require("express");
const {
  getAllColleges,
  getEligibleColleges,
} = require("../controllers/collegeController");

const router = express.Router();

// ✅ Get all colleges
router.get("/", getAllColleges);

// ✅ Get eligible colleges
router.get("/eligible-colleges", getEligibleColleges);

module.exports = router;

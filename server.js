const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const collegeRoutes = require("./routes/collegeRoutes");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();
const app = express();
app.use(express.json());

// ✅ Serve static files from the 's' directory
app.use(express.static(path.join(__dirname, "s")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Routes
app.use("/colleges", collegeRoutes);
app.use("/student", studentRoutes);

// ✅ Serve the main frontend page at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "s", "style.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


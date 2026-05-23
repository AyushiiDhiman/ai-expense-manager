const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// load env
dotenv.config();

// app init
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("🚀 Expense Manager API is running");
});

// routes
const expenseRoutes = require("./routes/expenseRoutes");
app.use("/api/expenses", expenseRoutes);

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
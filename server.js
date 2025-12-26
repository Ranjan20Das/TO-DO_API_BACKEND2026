const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Smart ToDo API running");
});

// Routes
app.use("/api", require("./routes/authRoutes")); // Auth routes
app.use("/tasks", require("./routes/taskRoutes")); // Task routes (protected with authMiddleware)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
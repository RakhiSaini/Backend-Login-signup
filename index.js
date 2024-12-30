require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Start Server
connectDB();
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

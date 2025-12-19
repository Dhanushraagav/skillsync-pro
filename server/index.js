require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const express = require("express");

const app = express();

app.use(express.json());

const healthRoutes = require("./routes/health.routes");

app.use("/api", healthRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const apiRouter = require("./routes/api.routes");

// JSON middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public/"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

//routes
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Server Connected");
});

// Database connection
mongoose
  .connect(
    "mongodb+srv://dulakshanwije:uIdIeC4TyjFHeDF2@devicesms.g7sfmhi.mongodb.net/locations_devices"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Failed to connect database");
  });

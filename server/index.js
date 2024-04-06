const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const apiRouter = require("./routes/api.routes");
require("dotenv").config();
//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("public/"));

app.get("/", function (req, res) {
  res.send("Hello!!!");
});

//routes
app.use("/api", apiRouter);

// Database connection
// mongoose
// .connect(
//   "mongodb+srv://dulakshanwije:uIdIeC4TyjFHeDF2@devicesms.g7sfmhi.mongodb.net/locations_devices"
// )
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Failed to connect database");
  });

app.listen(3000, () => {
  console.log("Server Connected");
});

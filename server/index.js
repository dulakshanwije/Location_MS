const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Location = require("./models/location.model");
const Device = require("./models/device.model");

// JSON middleware
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server Connected");
});

// Database connection
mongoose
  .connect(
    "mongodb+srv://dulakshanwije:uIdIeC4TyjFHeDF2@devicesms.g7sfmhi.mongodb.net/devicems_db"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Failed to connect database");
  });

// Routes
// Add location
app.post("/api/add_location", async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add device
app.post("/api/add_device", async (req, res) => {
  try {
    const device = await Device.create(req.body);
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Locations
app.get("/api/get_locations", async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Location by ID
app.get("/api/get_location/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Devices by Location ID
app.get("/api/get_devices/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const devices = await Device.find({ location_id: id });
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Number of Devices by Location ID
app.get("/api/get_devices_count/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const devices_count = await Device.countDocuments({ location_id: id });
    res.status(200).json(devices_count);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update device by Device ID
app.put("/api/update_device/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findById(id);
    if (!device) {
      return res.status(404).json({ message: "Device Not Found!" });
    }
    const device2 = await Device.findByIdAndUpdate(id, {
      is_active: !device.is_active,
    });
    const updatedDevice = await Device.findById(id);
    res.status(200).json(updatedDevice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete device by Device ID
app.delete("/api/delete_device/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findByIdAndDelete(id);
    if (!device) {
      res.status(404).json({ message: "Device not found!!!" });
    }
    res.status(200).json({ message: "Device deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//
